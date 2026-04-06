import { Controller, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern({ cmd: 'create_book' })
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern({ cmd: 'find_all_books' })
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern({ cmd: 'find_book' })
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_book' })
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern({ cmd: 'remove_book' })
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.booksService.remove(id);
  }
}