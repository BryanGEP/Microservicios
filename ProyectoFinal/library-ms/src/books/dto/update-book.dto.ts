import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsNumber()
    @IsPositive()
    id: number;
}