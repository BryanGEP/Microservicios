import { Injectable, NotFoundException ,HttpStatus} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';


@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({
      data: createBookDto,
    });
  }
  
  async findAll() {
    return this.prisma.book.findMany({
      where: { deleted: false }
    });
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findFirst({
      where: { id, deleted: false },
    });
   if(!book){
      throw new RpcException({
        message:`book with the id: #${id} not founds`,
        status:HttpStatus.BAD_REQUEST
      })
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const { id: __, ...data } = updateBookDto;
    await this.findOne(id);
    return this.prisma.book.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.book.update({
      where: { id },
      data: { deleted: true },
    });
  }
}