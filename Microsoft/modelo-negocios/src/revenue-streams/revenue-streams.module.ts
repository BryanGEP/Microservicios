import { Module } from '@nestjs/common';
import { RevenueStreamsService } from './revenue-streams.service';
import { RevenueStreamsController } from './revenue-streams.controller';

@Module({
  controllers: [RevenueStreamsController],
  providers: [RevenueStreamsService],
})
export class RevenueStreamsModule {}
