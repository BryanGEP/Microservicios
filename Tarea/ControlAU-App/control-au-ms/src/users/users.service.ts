import { Injectable,OnModuleInit,Logger, NotFoundException  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';

@Injectable()
export class UsersService  extends PrismaClient implements OnModuleInit{
  

  private readonly logger= new Logger('PrductService');
 
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Conected to the database')
  }

  create(createUserDto: CreateUserDto) {
    return this.control.create({
      data: createUserDto,
    })
  }

   async findAll(paginationDto:PaginationDto) {
    const {page=1,limit=1}=paginationDto;
    //const limit=paginationDto.limit;
    //const page=paginationDto.page;

    const totalRegistry=Math.ceil(await this.control.count());
    const lastPage=Math.ceil(totalRegistry/limit);

    return {
      data:await this.control.findMany({
        skip:(page-1)*limit,
        take:limit,
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
    const product=await this.control.findFirst({where:{id}});
    if(!product){
      throw new NotFoundException(`Product with the id: #${id} not founds`)
    }
    return product;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
