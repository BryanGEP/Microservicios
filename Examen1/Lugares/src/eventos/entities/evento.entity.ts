export class Evento {
    constructor(
        public titulo:string,
        public descripcion:string,
        public fecha:string,
        public id:string
    ){}

    updateWith({
        titulo,
        descripcion,
        fecha
    }:UpdateWithOptions) {
        this.titulo=titulo??this.titulo;
        this.descripcion=descripcion??this.descripcion;
        this.fecha=fecha??this.fecha;
    }
}

interface UpdateWithOptions{
        titulo?:string;
        descripcion?:string;
        fecha?:string;
        }
    