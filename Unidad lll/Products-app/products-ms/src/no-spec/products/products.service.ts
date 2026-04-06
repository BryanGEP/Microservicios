import { Injectable, OnModuleInit,Logger, NotFoundException, HttpStatus } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';
import { RpcException } from '@nestjs/microservices';
//import { PrismaClient } from 'generated/prisma/client';
//import { PrismaClient } from 'generated/client';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit{

  private readonly logger= new Logger('PrductService');
  
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Conected to the database')
  }

  create(createProductDto: CreateProductDto) {
    return this.product.create({
      data: createProductDto,
    })

    //return 'This action adds a new product';
  }

  async findAll(paginationDto:PaginationDto) {
    const {page=1,limit=1}=paginationDto;
    //const limit=paginationDto.limit;
    //const page=paginationDto.page;

    const totalRegistry=await this.product.count({
      where:{available:true}
    });
    const lastPage=Math.ceil(totalRegistry/limit);

    return {
      data:await this.product.findMany({
        skip:(page-1)*limit,
        take:limit,
        where:{available:true}
      }),
      meta:{
        total:totalRegistry,
        page:page,
        lastPage:lastPage,
        resgistry:totalRegistry-(3*page)
      }
    }

  } 

  async findOne(id: number) {
    const product=await this.product.findFirst({
      where:{id,available:true}
    });
    if(!product){
      throw new RpcException({
        message:`Product with the id: #${id} not founds`,
        status:HttpStatus.BAD_REQUEST
      })
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const{id:__,...data}=updateProductDto;
    await this.findOne(id);
    return this.product.update({
      where:{id},
      data:data,
    });
    //return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    await this.findOne(id);
    const product =await  this.product.update({
      where:{id},
      data:{
        available: false
      }
    });
    return product;
  }
}
