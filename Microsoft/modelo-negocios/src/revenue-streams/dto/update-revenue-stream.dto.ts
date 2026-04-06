import { PartialType } from '@nestjs/mapped-types';
import { CreateRevenueStreamDto } from './create-revenue-stream.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateRevenueStreamDto extends PartialType(CreateRevenueStreamDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
