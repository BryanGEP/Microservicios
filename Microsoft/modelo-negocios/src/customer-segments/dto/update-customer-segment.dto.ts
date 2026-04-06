import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerSegmentDto } from './create-customer-segment.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCustomerSegmentDto extends PartialType(CreateCustomerSegmentDto) {
   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
