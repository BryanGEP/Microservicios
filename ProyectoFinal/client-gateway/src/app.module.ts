import { Module } from '@nestjs/common';
import { ProductsModule } from './members/products.module';
import { BooksModule } from './books/books.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [ProductsModule, BooksModule, LoansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
