import { Test, TestingModule } from '@nestjs/testing';
import { KeyActivitiesService } from './key-activities.service';

describe('KeyActivitiesService', () => {
  let service: KeyActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyActivitiesService],
    }).compile();

    service = module.get<KeyActivitiesService>(KeyActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
