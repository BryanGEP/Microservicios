import { Injectable, OnModuleInit,Logger, NotFoundException,HttpStatus  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit{

  private readonly logger= new Logger('UsersService');
 
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Conected to the database')
  }

  create(createUserDto: CreateUserDto) {
    return this.controlAU.create({
      data: createUserDto,
    })
  }

  async findAll(paginationDto:PaginationDto) {
    const {page=1,limit=1}=paginationDto;
    //const limit=paginationDto.limit;
    //const page=paginationDto.page;

    const totalRegistry=await this.controlAU.count({
      //where:{available:true}
    });

    const lastPage=Math.ceil(totalRegistry/limit);

    return {
      data:await this.controlAU.findMany({
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
    const product=await this.controlAU.findFirst({where:{id}});
    if(!product){
      throw new RpcException({
        message:`user with the id: #${id} not founds`,
        status:HttpStatus.BAD_REQUEST
      })
    }
    return product;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const{id:__,...data}=updateUserDto;
    await this.findOne(id);
    return this.controlAU.update({
      where:{id},
      data:data,
    });
  }

  async remove(id: number) {
     await this.findOne(id);
    const product =await  this.controlAU.delete({
      where:{id},
     
    });
    return product;
  }
}
