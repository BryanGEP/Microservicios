import { Module } from '@nestjs/common';
import { ProductsModule } from './control/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
