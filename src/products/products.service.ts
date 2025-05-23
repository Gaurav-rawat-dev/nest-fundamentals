import { Body, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './productDto/product.dto';

@Injectable()
export class ProductsService {

   constructor(
       @InjectModel(Product.name) private productModel: Model<ProductDocument>
   ){}

    async findAll () {       
        return await this.productModel.find()
    }

    
  async create(@Body() createProductDTO: CreateProductDto) {
    return await this.productModel.create(createProductDTO);
  }

}
