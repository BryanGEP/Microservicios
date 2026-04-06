import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class CreateLaboratorioAcDto {

    @IsString()
    public laboratoryname: string;
    
}
