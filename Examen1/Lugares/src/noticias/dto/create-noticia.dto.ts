import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateNoticiaDto {
    //@IsString()
    //id:string;

    @IsString()
    titulo:string;

    @IsString()
    descripcion:string;

    @IsString()
    fecha_publicacion:string;

    @IsString()
    fecha_duracion:string;

    @IsArray()
    @IsUrl({}, { each: true })
    imagenes: string[];
}
