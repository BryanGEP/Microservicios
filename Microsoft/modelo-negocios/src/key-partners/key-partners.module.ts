import { Module } from '@nestjs/common';
import { KeyPartnersService } from './key-partners.service';
import { KeyPartnersController } from './key-partners.controller';

@Module({
  controllers: [KeyPartnersController],
  providers: [KeyPartnersService],
})
export class KeyPartnersModule {}
