import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;

}
