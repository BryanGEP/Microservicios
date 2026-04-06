import { PartialType } from '@nestjs/mapped-types';
import { CreateChanelDto } from './create-chanel.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateChanelDto extends PartialType(CreateChanelDto) {
   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
