import { Module } from '@nestjs/common';
import { ControlcalidadModule } from './controlcalidad/controlcalidad.module';

@Module({
  imports: [ControlcalidadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
