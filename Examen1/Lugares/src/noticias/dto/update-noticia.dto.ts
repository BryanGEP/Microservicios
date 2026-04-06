import { PartialType } from '@nestjs/mapped-types';
import { CreateNoticiaDto } from './create-noticia.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateNoticiaDto extends PartialType(CreateNoticiaDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
