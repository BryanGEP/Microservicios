import { Injectable, OnModuleInit,Logger, NotFoundException,HttpStatus  } from '@nestjs/common';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ControlService extends PrismaClient implements OnModuleInit{

  private readonly logger= new Logger('ControlService');
 
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Conected to the database')
  }

  create(createControlDto: CreateControlDto) {
    return this.controlCalidad.create({
      data: createControlDto,
    })
  }

  async findAll(paginationDto:PaginationDto) {
    const {page=1,limit=1}=paginationDto;
    //const limit=paginationDto.limit;
    //const page=paginationDto.page;

    const totalRegistry=await this.controlCalidad.count({
      //where:{available:true}
    });
    const lastPage=Math.ceil(totalRegistry/limit);

    return {
      data:await this.controlCalidad.findMany({
        skip:(page-1)*limit,
        take:limit,
       // where:{available:true}
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
    const product=await this.controlCalidad.findFirst({where:{id}});
    if(!product){
      throw new RpcException({
        message:`Product with the id: #${id} not founds`,
        status:HttpStatus.BAD_REQUEST
      })
    }
    return product;
  }

  async update(id: number, updateControlDto: UpdateControlDto) {
    const{id:__,...data}=updateControlDto;
    await this.findOne(id);
    return this.controlCalidad.update({
      where:{id},
      data:data,
    });
  }

  async remove(id: number) {
   await this.findOne(id);
    const product =await  this.controlCalidad.delete({
      where:{id},
    });
    return product;
  }
}
