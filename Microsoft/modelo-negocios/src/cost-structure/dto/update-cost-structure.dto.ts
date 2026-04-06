import { PartialType } from '@nestjs/mapped-types';
import { CreateCostStructureDto } from './create-cost-structure.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCostStructureDto extends PartialType(CreateCostStructureDto) {
   @IsString()
   @IsUUID()
   @IsOptional()
   id?:string;
}
