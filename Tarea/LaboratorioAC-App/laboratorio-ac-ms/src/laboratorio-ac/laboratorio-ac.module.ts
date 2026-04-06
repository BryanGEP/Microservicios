import { Module } from '@nestjs/common';
import { LaboratorioAcService } from './laboratorio-ac.service';
import { LaboratorioAcController } from './laboratorio-ac.controller';

@Module({
  controllers: [LaboratorioAcController],
  providers: [LaboratorioAcService],
})
export class LaboratorioAcModule {}
