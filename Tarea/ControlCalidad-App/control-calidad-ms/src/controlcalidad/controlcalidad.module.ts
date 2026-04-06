import { Module } from '@nestjs/common';
import { ControlcalidadService } from './controlcalidad.service';
import { ControlcalidadController } from './controlcalidad.controller';

@Module({
  controllers: [ControlcalidadController],
  providers: [ControlcalidadService],
})
export class ControlcalidadModule {}
