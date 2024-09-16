import { Body, Controller, Post } from '@nestjs/common';
import { TenantsService } from '../application/tenants.service';
import { CreateTenantDto } from './dto/create-tenant.dto';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post()
  async create(@Body() tenant: CreateTenantDto) {
    return this.tenantsService.create(tenant);
  }
}
