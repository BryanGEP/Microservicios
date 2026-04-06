import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyPartnerDto } from './create-key-partner.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateKeyPartnerDto extends PartialType(CreateKeyPartnerDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
