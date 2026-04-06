import { Controller, ParseIntPipe } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @MessagePattern({ cmd: 'create_loan' })
  create(@Payload() createLoanDto: CreateLoanDto) {
    return this.loansService.create(createLoanDto);
  }

  @MessagePattern({ cmd: 'find_all_loans' })
  findAll() {
    return this.loansService.findAll();
  }

  @MessagePattern({ cmd: 'find_loan' })
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.loansService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_loan' })
  update(@Payload() updateLoanDto: UpdateLoanDto) {
    return this.loansService.update(updateLoanDto.id, updateLoanDto);
  }

  @MessagePattern({ cmd: 'remove_loan' })
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.loansService.remove(id);
  }

  @MessagePattern({ cmd: 'return_book' })
  returnBook(@Payload('id', ParseIntPipe) id: number) {
    return this.loansService.returnBook(id);
  }
}