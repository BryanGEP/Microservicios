import { Test, TestingModule } from '@nestjs/testing';
import { CustomerRelationshipService } from './customer-relationship.service';

describe('CustomerRelationshipService', () => {
  let service: CustomerRelationshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerRelationshipService],
    }).compile();

    service = module.get<CustomerRelationshipService>(CustomerRelationshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
