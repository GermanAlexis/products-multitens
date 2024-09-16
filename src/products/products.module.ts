import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsController } from './infrastructure/products.controller';
import { TenantModels } from 'src/config/providers/tenant_models.provider';
import { ProductsService } from './application/products.service';
import { TenantsIdentifierMiddleware } from 'src/middlewares/tenants-identifier/tenants-identifier.middleware';

@Module({
  providers: [ProductsService, TenantModels.productModel],
  controllers: [ProductsController],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantsIdentifierMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.ALL });
  }
}
