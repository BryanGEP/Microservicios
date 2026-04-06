export class Product {
    constructor(
        public id:string,
        public name:string,
        public description:string,
        public price:number
    ){}

    //TODO: update with
    updateWith({name,description,price}:{name?:string;description?:string;price?:number;}){
        this.name=name??this.name;
        this.description=description??this.description;
        this.price=price??this.price;
    };
    
    /*
    updateWith({
        name,
        description,
        price
    }:UpdateWithOptions) {
        this.name=name??this.name;
        this.description=description??this.description;
        this.price=price??this.price;
    }*/
}
/*
    interface UpdateWithOptions{
        name?:string;
        description?:string;
        price?:number;
        }
    */
    
   
