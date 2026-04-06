import { Module } from '@nestjs/common';

import { KeyActivitiesModule } from './key-activities/key-activities.module';
import { KeyPartnersModule } from './key-partners/key-partners.module';
import { ValuePropositionsModule } from './value-propositions/value-propositions.module';
import { CustomerRelationshipModule } from './customer-relationship/customer-relationship.module';
import { ChanelsModule } from './chanels/chanels.module';
import { CostStructureModule } from './cost-structure/cost-structure.module';
import { RevenueStreamsModule } from './revenue-streams/revenue-streams.module';
import { CustomerSegmentsModule } from './customer-segments/customer-segments.module';

@Module({
  imports: [ KeyActivitiesModule, KeyPartnersModule, ValuePropositionsModule, CustomerRelationshipModule, ChanelsModule, CostStructureModule, RevenueStreamsModule, CustomerSegmentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
