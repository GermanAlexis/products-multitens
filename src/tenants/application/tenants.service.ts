import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tenant } from '../domain/tenants.schema';
import { CreateTenantDto } from '../infrastructure/dto/create-tenant.dto';

@Injectable()
export class TenantsService {
  constructor(@InjectModel(Tenant.name) private TenantModel: Model<Tenant>) {}

  async getTenantBydId(tenantId: string): Promise<Tenant> {
    return await this.TenantModel.findOne({ _id: tenantId }).exec();
  }

  async create(tenantDto: CreateTenantDto) {
    return this.TenantModel.create(tenantDto);
  }
}
