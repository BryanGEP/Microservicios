import { Module } from '@nestjs/common';
import { ControlModule } from './control/control.module';

@Module({
  imports: [ControlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
