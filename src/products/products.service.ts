import { Body, ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './productDto/product.dto';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ProductsService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) { }

  async findAll() {
    try {
    //  without cache Interceptor
    // const cachedData = await this.cacheManager.get('products')
    // if (!cachedData) {
    //   const products = await this.retrieveProducts()
    //   await this.cacheManager.set('products', products);
    //   const data = await this.cacheManager.get('products')
    //   return data
    // }
    // return cachedData

    // with CACHE iNTERCEPTOR
    await this.cacheManager.set('hi', "hello")
    return await this.retrieveProducts()

    // await this.cacheManager.set('debugKey', 'debugValue', 100);
    //    const result = await this.cacheManager.get('debugKey')
    //    return result
    } catch (error) {

     return error
    }

  }

  async retrieveProducts() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
    const data = await this.productModel.find().exec();
    return data;
  }


  async create(@Body() createProductDTO: CreateProductDto) {
    return await this.productModel.create(createProductDTO);
  }

}
