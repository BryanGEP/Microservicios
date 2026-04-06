import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class CreateBookDto {
    @IsString()
    public title: string;

    @IsString()
    public author: string;

    @IsString()
    public isbn: string;

    @IsInt()
    @Min(1900)
    public publishedYear: number;

    @IsString()
    public genre: string;

    @IsInt()
    @Min(1)
    public totalCopies: number;

    @IsInt()
    @Min(0)
    public availableCopies: number;

    @IsString()
    @IsOptional()
    public description: string;
}
