import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    nombre:string;

    @IsNumber()
    @Type(()=>Number)
    nc:number;

    @IsString()
    carrera:string;

    //@IsString()
    //id:string;
    
}
