import { Injectable, OnModuleInit,Logger, NotFoundException,HttpStatus  } from '@nestjs/common';
import { CreateLabAcDto } from './dto/create-lab-ac.dto';
import { UpdateLabAcDto } from './dto/update-lab-ac.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class LabAcService extends PrismaClient implements OnModuleInit{

  private readonly logger= new Logger('LaboratorioService');
 
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Conected to the database')
  }

  create(createLabAcDto: CreateLabAcDto) {
     return this.laboratorioAC.create({
      data: createLabAcDto,
    })
  }

  async findAll(paginationDto:PaginationDto) {
    const {page=1,limit=1}=paginationDto;
    //const limit=paginationDto.limit;
    //const page=paginationDto.page;

    const totalRegistry=await this.laboratorioAC.count({
      //where:{available:true}
    });

    const lastPage=Math.ceil(totalRegistry/limit);

    return {
      data:await this.laboratorioAC.findMany({
        skip:(page-1)*limit,
        take:limit,
        //where:{available:true}
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
    const product=await this.laboratorioAC.findFirst({where:{id}});
    if(!product){
      throw new RpcException({
        message:`Product with the id: #${id} not founds`,
        status:HttpStatus.BAD_REQUEST
      })
    }
    return product;
  }

  async update(id: number, updateLabAcDto: UpdateLabAcDto) {
    const{id:__,...data}=updateLabAcDto;
    await this.findOne(id);
    return this.laboratorioAC.update({
      where:{id},
      data:data,
    });
  }

  async remove(id: number) {
   await this.findOne(id);
    const product =await  this.laboratorioAC.delete({
      where:{id},
      
    });
    return product;
  }
}
