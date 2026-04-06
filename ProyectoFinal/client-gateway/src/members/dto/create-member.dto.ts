import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateMemberDto {
    @IsString()
    public name: string;

    @IsEmail()
    public email: string;

    @IsString()
    @IsOptional()
    public phone: string;

    @IsString()
    public status: string;

}