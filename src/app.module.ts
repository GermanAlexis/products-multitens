import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleAsyncOptions } from './mongoose/mongoose.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
    }),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    ProductsModule,
  ],
})
export class AppModule {}
