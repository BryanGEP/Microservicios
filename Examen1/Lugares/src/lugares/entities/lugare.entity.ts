export class Lugare {
    constructor(
        public id:string,
        public imagen:string,
        public ruta:string,
        public nombre:string,
        public ubicacion:string
    ){}

    updateWith({
        imagen,
        ruta,
        nombre,
        ubicacion
    }:UpdateWithOptions) {
        this.imagen=imagen??this.imagen;
        this.ruta=ruta??this.ruta;
        this.nombre=nombre??this.nombre;
        this.ubicacion=ubicacion??this.ubicacion;
    }
}

interface UpdateWithOptions{
        imagen?:string;
        ruta?:string;
        nombre?:string;
        ubicacion?:string;
        }
