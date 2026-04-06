import { Test, TestingModule } from '@nestjs/testing';
import { KeyPartnersController } from './key-partners.controller';
import { KeyPartnersService } from './key-partners.service';

describe('KeyPartnersController', () => {
  let controller: KeyPartnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyPartnersController],
      providers: [KeyPartnersService],
    }).compile();

    controller = module.get<KeyPartnersController>(KeyPartnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
