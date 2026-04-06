import { Module } from '@nestjs/common';
import { KeyActivitiesService } from './key-activities.service';
import { KeyActivitiesController } from './key-activities.controller';

@Module({
  controllers: [KeyActivitiesController],
  providers: [KeyActivitiesService],
})
export class KeyActivitiesModule {}
