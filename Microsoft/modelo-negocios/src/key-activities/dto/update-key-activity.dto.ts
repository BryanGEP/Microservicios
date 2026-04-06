import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyActivityDto } from './create-key-activity.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateKeyActivityDto extends PartialType(CreateKeyActivityDto) {

   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
