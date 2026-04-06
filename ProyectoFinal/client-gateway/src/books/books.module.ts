import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BOOKS_SERVICE, envs, PRODUCT_SERVICE } from 'src/config';

@Module({
  controllers: [BooksController],
  imports:[
    ClientsModule.register([{
      name:BOOKS_SERVICE,
      transport:Transport.TCP,
      options:{
        host:envs.BOOKS_SERVICE_HOST,
        port:envs.BOOKS_SERVICE_PORT,
      }
    }],)
  ]
})
export class BooksModule {}