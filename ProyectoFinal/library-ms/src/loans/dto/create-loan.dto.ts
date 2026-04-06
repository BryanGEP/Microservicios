import { IsInt, IsDateString, IsPositive } from 'class-validator';

export class CreateLoanDto {
    @IsInt()
    @IsPositive()
    public bookId: number;

    @IsInt()
    @IsPositive()
    public memberId: number;

    @IsDateString()
    public dueDate: string;
}