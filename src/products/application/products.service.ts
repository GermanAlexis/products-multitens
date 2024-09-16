import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Model } from 'mongoose';
import { PROVIDER } from 'src/providers/enums/provider.enum';
import { Product } from '../domain/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PROVIDER.PRODUCT_MODEL) private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    console.log('createProductDto: ', createProductDto);
    return 'This action adds a new product';
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log('updateProductDto: ', updateProductDto);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
