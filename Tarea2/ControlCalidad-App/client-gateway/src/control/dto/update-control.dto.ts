import { PartialType } from '@nestjs/mapped-types';
import { CreateControlDto } from './create-control.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateControlDto extends PartialType(CreateControlDto) {

}
