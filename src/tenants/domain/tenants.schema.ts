import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Tenant extends Document {
  @Prop({ required: true })
  tenantName: string;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
