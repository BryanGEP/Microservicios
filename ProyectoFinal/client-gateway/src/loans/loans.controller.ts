import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { LOANS_SERVICE } from 'src/config';
import { PaginationDto } from 'src/common';
import { catchError, firstValueFrom } from 'rxjs';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { error } from 'console';

@Controller('loans')
export class LoansController {
  constructor(
    @Inject(LOANS_SERVICE) private readonly productsClient:ClientProxy,
  ) {}
  
  @Post()
  createProduct(@Body() createLoanDto:CreateLoanDto){
    return this.productsClient.send(
      {cmd:'create_loan'},
      createLoanDto
    );
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto){
    return this.productsClient.send(
      {cmd:'find_all_loans'},
      paginationDto
    );
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
    try{
        const product =await firstValueFrom(
          this.productsClient.send(
            {cmd:'find_loan'},
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
      {cmd:'remove_loan'},
      {id}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    )
  }

  @Patch(':id')
  patchProduct(@Param('id',ParseIntPipe) id:number, @Body() updateLoanDto:UpdateLoanDto) {
    return this.productsClient.send(
      {cmd:'return_book'},
      {id,...updateLoanDto}
    ).pipe(
      catchError(err=>{
        throw new RpcException(err);
      })
    );
  }
}

