import { Test, TestingModule } from '@nestjs/testing';
import { ValuePropositionsController } from './value-propositions.controller';
import { ValuePropositionsService } from './value-propositions.service';

describe('ValuePropositionsController', () => {
  let controller: ValuePropositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValuePropositionsController],
      providers: [ValuePropositionsService],
    }).compile();

    controller = module.get<ValuePropositionsController>(ValuePropositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
