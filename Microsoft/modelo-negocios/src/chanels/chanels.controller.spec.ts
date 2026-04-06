import { Test, TestingModule } from '@nestjs/testing';
import { ChanelsController } from './chanels.controller';
import { ChanelsService } from './chanels.service';

describe('ChanelsController', () => {
  let controller: ChanelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChanelsController],
      providers: [ChanelsService],
    }).compile();

    controller = module.get<ChanelsController>(ChanelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
