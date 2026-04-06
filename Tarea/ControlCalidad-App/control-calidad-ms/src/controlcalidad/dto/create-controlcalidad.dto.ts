import { IsString, IsEmail, IsBoolean, IsOptional,IsArray,ValidateNested,IsEnum, IsNumber, Min, Max } from 'class-validator';

export class CreateControlcalidadDto {

    @IsNumber()
    @Min(0)
    @Max(100)
    public qualityScore: number;

    @IsString()
    @IsOptional()
    public comments?: string;

    @IsBoolean()
    @IsOptional()
    public requiresReinspection?: boolean;
}
