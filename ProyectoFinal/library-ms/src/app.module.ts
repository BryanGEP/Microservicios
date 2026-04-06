import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { LoansModule } from './loans/loans.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    BooksModule,
    MembersModule,
    LoansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}