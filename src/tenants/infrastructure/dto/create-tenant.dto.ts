import { IsString } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  tenantName: string;
}
