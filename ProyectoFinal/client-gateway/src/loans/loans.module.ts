import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, LOANS_SERVICE } from 'src/config';

@Module({
  controllers: [LoansController],
  imports:[
    ClientsModule.register([{
      name:LOANS_SERVICE,
      transport:Transport.TCP,
      options:{
        host:envs.LOANS_SERVICE_HOST,
        port:envs.LOANS_SERVICE_PORT,
      }
    }],)
  ]
})
export class LoansModule {}
