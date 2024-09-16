import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantConnectionProvider } from 'src/providers/tenant_connection.provider';
import { Tenant, TenantSchema } from './domain/tenants.schema';
import { TenantsService } from './application/tenants.service';
import { TenantsController } from './infrastructure/tenants.controller';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tenant.name,
        schema: TenantSchema,
      },
    ]),
  ],
  controllers: [TenantsController],
  providers: [TenantsService, TenantConnectionProvider],
  exports: [TenantsService, TenantConnectionProvider],
})
export class TenantsModule {}
