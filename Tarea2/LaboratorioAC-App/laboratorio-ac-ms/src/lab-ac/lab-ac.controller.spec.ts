import { Test, TestingModule } from '@nestjs/testing';
import { LabAcController } from './lab-ac.controller';
import { LabAcService } from './lab-ac.service';

describe('LabAcController', () => {
  let controller: LabAcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabAcController],
      providers: [LabAcService],
    }).compile();

    controller = module.get<LabAcController>(LabAcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
