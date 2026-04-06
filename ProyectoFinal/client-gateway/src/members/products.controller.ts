import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { error } from 'console';

@Controller('members')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient:ClientProxy,
  ) {}
  
  @Post()
  createProduct(@Body() createMemberDto:CreateMemberDto){
    return this.productsClient.send(
      {cmd:'create_member'},
      createMemberDto
    );
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto){
    return this.productsClient.send(
      {cmd:'find_all_members'},
      paginationDto
    );
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
    try{
        const product =await firstValueFrom(
          this.productsClient.send(
            {cmd:'find_member'},
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
      {cmd:'remove_member'},
      {id}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    )
  }

  @Patch(':id')
  patchProduct(@Param('id',ParseIntPipe) id:number, @Body() updateMemberDto:UpdateMemberDto) {
    return this.productsClient.send(
      {cmd:'update_member'},
      {id,...updateMemberDto}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    );
  }
}

