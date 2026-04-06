import { Module } from '@nestjs/common';
import { CustomerRelationshipService } from './customer-relationship.service';
import { CustomerRelationshipController } from './customer-relationship.controller';

@Module({
  controllers: [CustomerRelationshipController],
  providers: [CustomerRelationshipService],
})
export class CustomerRelationshipModule {}
