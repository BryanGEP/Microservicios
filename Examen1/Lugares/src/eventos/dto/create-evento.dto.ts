import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateEventoDto {
    @IsString()
    titulo: string;
    
    @IsString()
    descripcion: string;
    
    @IsString()
    fecha: string;
    
    //@IsString()
    //id: string;
}
