import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(100)
  description;

  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
