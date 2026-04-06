import { Test, TestingModule } from '@nestjs/testing';
import { ValuePropositionsService } from './value-propositions.service';

describe('ValuePropositionsService', () => {
  let service: ValuePropositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValuePropositionsService],
    }).compile();

    service = module.get<ValuePropositionsService>(ValuePropositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
