import { IsString, IsEmail, IsBoolean, IsOptional,IsArray,ValidateNested,IsEnum, IsNumber, Min, Max } from 'class-validator';

export class CreateControlDto {

    @IsString()
    public qualityScore: string;

    @IsString()
    public comments: string;

}
