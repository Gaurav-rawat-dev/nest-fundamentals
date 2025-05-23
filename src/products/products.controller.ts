import { Body, Controller, Get, ParseIntPipe, Query, Req, Res, UsePipes, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PipeToNumber } from 'src/pipes/first-pipe';
import { CreateProductDto } from './productDto/product.dto';
import { reverse } from 'dns';
import { Response } from 'express';
// import { Query } from 'mongoose';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    // this one is by using our custom pipe to convert in number 
    @UsePipes(PipeToNumber)
    @Get()
    async findAllProducts(@Res() res: Response) {

        const data = await this.productService.findAll()
        return res.status(200).json({
            message: 'Products fetched successfully',
            data
        })

    }
    // @UsePipes(ParseIntPipe)
    //  this is by using inbuilt pipe in nest
    // @Get("my")
    // async myProducts (@Query("name", ParseIntPipe) name : number,  @Res() res: Response){
    //     console.log("=========code runnign  ============")

    //     console.log(typeof name)// @ts-ignore
    //     res.json(typeof name)
    // }


    @Post()
    async create(@Body() createProductDTO: CreateProductDto, @Res() res: Response) {
        try {
            const result = await this.productService.create(createProductDTO)

            return res.status(201).json({
                message: 'Product created successfully',
                data: result
            })
        } catch (error) {
            console.log(error)
        }
    }



}
