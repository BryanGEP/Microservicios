export class Noticia {
    constructor(
        public id:string,
        public titulo:string,
        public descripcion:string,
        public fecha_publicacion:string,
        public fecha_duracion:string,
        public imagenes:string[],
    ){}

    updateWith({
        titulo,
        descripcion,
        fecha_publicacion,
        fecha_duracion,
        imagenes
    }:UpdateWithOptions) {
        this.titulo=titulo??this.titulo;
        this.descripcion=descripcion??this.descripcion;
        this.fecha_publicacion=fecha_publicacion??this.fecha_publicacion;
        this.fecha_duracion=fecha_duracion??this.fecha_duracion;
        this.imagenes=imagenes??this.imagenes;
    }
}

interface UpdateWithOptions{
        titulo?:string;
        descripcion?:string;
        fecha_publicacion?:string;
        fecha_duracion?:string;
        imagenes?:string[];
        }