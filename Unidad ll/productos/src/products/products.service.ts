import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  private productos:Product[]=[];

  create(createProductDto: CreateProductDto) {
    const {name,description,price}=createProductDto;
    
    const newProduct=new Product(UuidV4(),name,description?? "",price);
    this.productos.push(newProduct);
    //return createProductDto;
    console.log(this.productos);
    return newProduct;
  }

  findAll() {
    return this.productos;
  }

  findOne(id: string):Product {
    const producto = this.productos.find(producto=>producto.id==id);
    if(!producto){
      throw new NotFoundException( `Producto con el id ${id} no Existe` );
    }
    return producto;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const {id:__,name,description,price}=updateProductDto;
    const product=this.findOne(id);
    product.updateWith({name,description,price})
    console.log(product);

    return product;
  }
 
  remove(id: string):Product {
    const producto=this.findOne(id);
    this.productos=this.productos.filter(producto=>producto.id!=id);
    console.log(producto);
    return producto;
  }
}
