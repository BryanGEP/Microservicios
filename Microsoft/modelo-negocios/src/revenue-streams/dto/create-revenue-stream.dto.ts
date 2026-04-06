import { IsString, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class CreateRevenueStreamDto {
    @IsString()
    source: string;

    @IsNumber()
    @Type(() => Number)
    amount: number;
}

