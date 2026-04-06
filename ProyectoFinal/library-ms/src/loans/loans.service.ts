import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLoanDto: CreateLoanDto) {
    // Verificar que el libro existe y tiene copias disponibles
    const book = await this.prisma.book.findUnique({
      where: { id: createLoanDto.bookId }
    });

    if (!book) {
      throw new NotFoundException(`Book with id ${createLoanDto.bookId} not found`);
    }

    if (book.availableCopies <= 0) {
      throw new BadRequestException('No copies available for this book');
    }

    // Verificar que el miembro existe
    const member = await this.prisma.member.findUnique({
      where: { id: createLoanDto.memberId }
    });

    if (!member) {
      throw new NotFoundException(`Member with id ${createLoanDto.memberId} not found`);
    }

    if (member.status !== 'active') {
      throw new BadRequestException('Member is not active');
    }

    // Crear el préstamo y actualizar copias disponibles
    const loan = await this.prisma.loan.create({
      data: {
        bookId: createLoanDto.bookId,
        memberId: createLoanDto.memberId,
        dueDate: new Date(createLoanDto.dueDate),
      },
    });

    // Reducir copias disponibles
    await this.prisma.book.update({
      where: { id: createLoanDto.bookId },
      data: { availableCopies: book.availableCopies - 1 }
    });

    return loan;
  }

  async findAll() {
    return this.prisma.loan.findMany({
      include: {
        book: true,
        member: true,
      }
    });
  }

  async findOne(id: number) {
    const loan = await this.prisma.loan.findFirst({
      where: { id },
      include: {
        book: true,
        member: true,
      }
    });
    if (!loan) {
      throw new NotFoundException(`Loan with id ${id} not found`);
    }
    return loan;
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    const { id: __, ...data } = updateLoanDto;
    await this.findOne(id);
    return this.prisma.loan.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.loan.delete({
      where: { id },
    });
  }

  async returnBook(id: number) {
    const loan = await this.findOne(id);

    if (loan.returnDate) {
      throw new BadRequestException('Book already returned');
    }

    // Actualizar el préstamo
    const updatedLoan = await this.prisma.loan.update({
      where: { id },
      data: {
        returnDate: new Date(),
        status: 'returned'
      }
    });

    // Incrementar copias disponibles
    await this.prisma.book.update({
      where: { id: loan.bookId },
      data: {
        availableCopies: { increment: 1 }
      }
    });

    return updatedLoan;
  }
}
