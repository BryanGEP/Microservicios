import { Module } from '@nestjs/common';
import { LaboratorioAcModule } from './laboratorio-ac/laboratorio-ac.module'

@Module({
  imports: [LaboratorioAcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
