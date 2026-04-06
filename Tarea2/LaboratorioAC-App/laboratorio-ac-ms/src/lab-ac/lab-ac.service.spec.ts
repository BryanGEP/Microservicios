import { Test, TestingModule } from '@nestjs/testing';
import { LabAcService } from './lab-ac.service';

describe('LabAcService', () => {
  let service: LabAcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabAcService],
    }).compile();

    service = module.get<LabAcService>(LabAcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
