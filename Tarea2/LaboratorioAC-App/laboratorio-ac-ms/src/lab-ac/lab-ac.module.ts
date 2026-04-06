import { Module } from '@nestjs/common';
import { LabAcService } from './lab-ac.service';
import { LabAcController } from './lab-ac.controller';

@Module({
  controllers: [LabAcController],
  providers: [LabAcService],
})
export class LabAcModule {}
