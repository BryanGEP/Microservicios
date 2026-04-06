import { Module } from '@nestjs/common';
import { CostStructureService } from './cost-structure.service';
import { CostStructureController } from './cost-structure.controller';

@Module({
  controllers: [CostStructureController],
  providers: [CostStructureService],
})
export class CostStructureModule {}
