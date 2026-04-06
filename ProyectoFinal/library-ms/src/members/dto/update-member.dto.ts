import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
    @IsNumber()
    @IsPositive()
    id: number;
}