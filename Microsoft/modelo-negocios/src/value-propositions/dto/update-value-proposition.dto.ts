import { PartialType } from '@nestjs/mapped-types';
import { CreateValuePropositionDto } from './create-value-proposition.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateValuePropositionDto extends PartialType(CreateValuePropositionDto) {
   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
