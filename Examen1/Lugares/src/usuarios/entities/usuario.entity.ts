export class Usuario {
    constructor(
        public nombre:string,
        public nc:number,
        public carrera:string,
        public id:string
    ){}

    updateWith({
        nombre,
        nc,
        carrera,
    }:UpdateWithOptions) {
        this.nombre=nombre??this.nombre;
        this.nc=nc??this.nc;
        this.carrera=carrera??this.carrera;
    }
}

 interface UpdateWithOptions{
        nombre?:string;
        nc?:number;
        carrera?:string;
        }
