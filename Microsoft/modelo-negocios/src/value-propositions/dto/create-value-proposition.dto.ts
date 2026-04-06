import { IsString, IsOptional } from "class-validator";

export class CreateValuePropositionDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    benefits?: string;
}
