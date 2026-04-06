import { Test, TestingModule } from '@nestjs/testing';
import { CostStructureService } from './cost-structure.service';

describe('CostStructureService', () => {
  let service: CostStructureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostStructureService],
    }).compile();

    service = module.get<CostStructureService>(CostStructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
