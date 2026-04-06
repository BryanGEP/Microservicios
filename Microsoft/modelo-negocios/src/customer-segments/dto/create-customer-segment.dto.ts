import { IsString, IsOptional } from "class-validator";

export class CreateCustomerSegmentDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;
}
