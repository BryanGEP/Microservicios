import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class CreateLabAcDto {

     @IsString()
    public laboratoryname: string;
}
