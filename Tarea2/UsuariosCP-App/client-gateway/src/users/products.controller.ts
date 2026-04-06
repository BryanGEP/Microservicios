import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { error } from 'console';

@Controller('users')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient:ClientProxy,
  ) {}
  
  @Post()
  createProduct(@Body() createUserDto:CreateUserDto){
    return this.productsClient.send(
      {cmd:'creatae_user'},
      createUserDto
    );
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto){
    return this.productsClient.send(
      {cmd:'find_all_users'},
      paginationDto
    );
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
    try{
        const product =await firstValueFrom(
          this.productsClient.send(
            {cmd:'find_one_user'},
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
      {cmd:'delete_user'},
      {id}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    )
  }

  @Patch(':id')
  patchProduct(@Param('id',ParseIntPipe) id:number, @Body() updateUserDto:UpdateUserDto) {
    return this.productsClient.send(
      {cmd:'update_user'},
      {id,...updateUserDto}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    );
  }
}

