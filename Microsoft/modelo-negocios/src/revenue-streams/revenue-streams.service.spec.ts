import { Test, TestingModule } from '@nestjs/testing';
import { RevenueStreamsService } from './revenue-streams.service';

describe('RevenueStreamsService', () => {
  let service: RevenueStreamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueStreamsService],
    }).compile();

    service = module.get<RevenueStreamsService>(RevenueStreamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
