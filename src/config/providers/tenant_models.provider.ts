import { Connection } from 'mongoose';
import { Product, ProductSchema } from 'src/products/domain/product.schema';
import { Tenant, TenantSchema } from 'src/tenants/domain/tenants.schema';
import { PROVIDER } from './enums/provider.enum';

export const TenantModels = {
  productModel: {
    provide: PROVIDER.PRODUCT_MODEL,
    useFactory: async (tenantConnection: Connection) => {
      return tenantConnection.model(Product.name, ProductSchema);
    },
    inject: [PROVIDER.TENANT_CONNECTION],
  },

  tenantModel: {
    provide: PROVIDER.TENANT_MODEL,
    useFactory: async (tenantConnection: Connection) => {
      return tenantConnection.model(Tenant.name, TenantSchema);
    },
    inject: [PROVIDER.TENANT_CONNECTION],
  },
};
