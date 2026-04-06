import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerRelationshipDto } from './create-customer-relationship.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCustomerRelationshipDto extends PartialType(CreateCustomerRelationshipDto) {
   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
