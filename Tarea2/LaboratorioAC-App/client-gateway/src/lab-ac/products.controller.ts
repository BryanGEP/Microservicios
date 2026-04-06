import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateLabAcDto } from './dto/create-lab-ac.dto';
import { UpdateLabAcDto } from './dto/update-lab-ac.dto';
import { error } from 'console';

@Controller('lab-ac')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient:ClientProxy,
  ) {}
  
  @Post()
  createProduct(@Body() createLabAcDto:CreateLabAcDto){
    return this.productsClient.send(
      {cmd:'create_lab'},
      createLabAcDto
    );
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto){
    return this.productsClient.send(
      {cmd:'find_all_lab'},
      paginationDto
    );
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
    try{
        const product =await firstValueFrom(
          this.productsClient.send(
            {cmd:'find_one_lab'},
            {id},
          )
        );
        return product;
    }catch(error){
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  deleteProduct(@Param('id') id:string) {
    return this.productsClient.send(
      {cmd:'delete_lab'},
      {id}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    )
  }

  @Patch(':id')
  patchProduct(@Param('id',ParseIntPipe) id:number, @Body() updateLabAcDto:UpdateLabAcDto) {
    return this.productsClient.send(
      {cmd:'update_lab'},
      {id,...updateLabAcDto}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    );
  }
}

