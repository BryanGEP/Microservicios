import { Module } from '@nestjs/common';
import { LabAcModule } from './lab-ac/lab-ac.module';

@Module({
  imports: [LabAcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
