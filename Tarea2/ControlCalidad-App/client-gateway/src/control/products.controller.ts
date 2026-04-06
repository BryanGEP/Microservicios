import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { error } from 'console';

@Controller('control')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient:ClientProxy,
  ) {}
  
  @Post()
  createProduct(@Body() createControlDto:CreateControlDto){
    return this.productsClient.send(
      {cmd:'create_control'},
      createControlDto
    );
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto){
    return this.productsClient.send(
      {cmd:'find_all_control'},
      paginationDto
    );
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
    try{
        const product =await firstValueFrom(
          this.productsClient.send(
            {cmd:'find_one_control'},
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
      {cmd:'delete_control'},
      {id}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    )
  }

  @Patch(':id')
  patchProduct(@Param('id',ParseIntPipe) id:number, @Body() updateControlDto:UpdateControlDto) {
    return this.productsClient.send(
      {cmd:'update_control'},
      {id,...updateControlDto}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    );
  }
}

