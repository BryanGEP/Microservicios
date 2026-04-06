import { Module } from '@nestjs/common';
import { ValuePropositionsService } from './value-propositions.service';
import { ValuePropositionsController } from './value-propositions.controller';

@Module({
  controllers: [ValuePropositionsController],
  providers: [ValuePropositionsService],
})
export class ValuePropositionsModule {}
