import { PartialType } from '@nestjs/mapped-types';
import { CreateLugareDto } from './create-lugare.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateLugareDto extends PartialType(CreateLugareDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
