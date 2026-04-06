import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {

     @IsString()
    public username: string;

    @IsString()
    public role: string;


}
