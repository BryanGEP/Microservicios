import { PartialType } from '@nestjs/mapped-types';
import { CreateLabAcDto } from './create-lab-ac.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateLabAcDto extends PartialType(CreateLabAcDto) {

    @IsNumber()
    @IsPositive()
    id:number;
}
