import { IsString, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class CreateCostStructureDto {
    @IsString()
    costName: string;

    @IsNumber()
    @Type(() => Number)
    amount: number;
}

