import { TenantsIdentifierMiddleware } from './tenants-identifier.middleware';

describe('TenantsIdentifierMiddleware', () => {
  it('should be defined', () => {
    expect(new TenantsIdentifierMiddleware()).toBeDefined();
  });
});
