import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateLugareDto {

    //@IsString()
    //id:string;

    @IsUrl()
    imagen: string;

    @IsString()
    ruta:string;

    @IsString()
    nombre:string;

    @IsString()
    ubicacion:string;
}
