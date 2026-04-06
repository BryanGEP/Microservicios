import { Test, TestingModule } from '@nestjs/testing';
import { CustomerRelationshipController } from './customer-relationship.controller';
import { CustomerRelationshipService } from './customer-relationship.service';

describe('CustomerRelationshipController', () => {
  let controller: CustomerRelationshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerRelationshipController],
      providers: [CustomerRelationshipService],
    }).compile();

    controller = module.get<CustomerRelationshipController>(CustomerRelationshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
