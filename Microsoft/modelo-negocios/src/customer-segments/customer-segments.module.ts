import { Module } from '@nestjs/common';
import { CustomerSegmentsService } from './customer-segments.service';
import { CustomerSegmentsController } from './customer-segments.controller';

@Module({
  controllers: [CustomerSegmentsController],
  providers: [CustomerSegmentsService],
})
export class CustomerSegmentsModule {}
