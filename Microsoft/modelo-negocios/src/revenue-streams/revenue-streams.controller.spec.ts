import { Test, TestingModule } from '@nestjs/testing';
import { RevenueStreamsController } from './revenue-streams.controller';
import { RevenueStreamsService } from './revenue-streams.service';

describe('RevenueStreamsController', () => {
  let controller: RevenueStreamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueStreamsController],
      providers: [RevenueStreamsService],
    }).compile();

    controller = module.get<RevenueStreamsController>(RevenueStreamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
