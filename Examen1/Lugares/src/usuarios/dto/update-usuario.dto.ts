import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
