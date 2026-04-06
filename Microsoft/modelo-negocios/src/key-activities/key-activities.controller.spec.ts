import { Test, TestingModule } from '@nestjs/testing';
import { KeyActivitiesController } from './key-activities.controller';
import { KeyActivitiesService } from './key-activities.service';

describe('KeyActivitiesController', () => {
  let controller: KeyActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyActivitiesController],
      providers: [KeyActivitiesService],
    }).compile();

    controller = module.get<KeyActivitiesController>(KeyActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
