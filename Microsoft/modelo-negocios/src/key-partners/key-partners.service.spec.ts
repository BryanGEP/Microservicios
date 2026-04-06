import { Test, TestingModule } from '@nestjs/testing';
import { KeyPartnersService } from './key-partners.service';

describe('KeyPartnersService', () => {
  let service: KeyPartnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyPartnersService],
    }).compile();

    service = module.get<KeyPartnersService>(KeyPartnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
