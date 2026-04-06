import { Test, TestingModule } from '@nestjs/testing';
import { CostStructureController } from './cost-structure.controller';
import { CostStructureService } from './cost-structure.service';

describe('CostStructureController', () => {
  let controller: CostStructureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostStructureController],
      providers: [CostStructureService],
    }).compile();

    controller = module.get<CostStructureController>(CostStructureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
