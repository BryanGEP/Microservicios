import { Test, TestingModule } from '@nestjs/testing';
import { ChanelsService } from './chanels.service';

describe('ChanelsService', () => {
  let service: ChanelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChanelsService],
    }).compile();

    service = module.get<ChanelsService>(ChanelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
