import {
    IsString,
    IsOptional,
    IsNumber,
    Min,
    IsEnum,
    IsArray,
    ArrayNotEmpty,
    ValidateNested,
    IsMongoId,
    IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

enum ProductStatus {
    IN_STOCK = 'in_stock',
    OUT_OF_STOCK = 'out_of_stock',
    DISCONTINUED = 'discontinued',
}

class ProductImageDto {
    @IsString()
    url: string;

    @IsOptional()
    @IsString()
    label?: string;
}

class ProductReviewDto {
    @IsMongoId()
    userId: string;

    @IsNumber()
    @Min(0)
    rating: number;

    @IsOptional()
    @IsString()
    comment?: string;
}

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsEnum(ProductStatus)
    status: ProductStatus;

    // @IsOptional()
    // @IsArray()
    // @IsString({ each: true })
    // tags: string[];

    // @IsOptional()
    // @IsArray()
    // @ValidateNested({ each: true })
    // @Type(() => ProductImageDto)
    // images: ProductImageDto[];

    // @IsMongoId()
    // createdBy: string;

    // @IsOptional()
    // @IsNumber()
    // @Min(0)
    // sold: number;

    // @IsOptional()
    // @IsNumber()
    // @Min(0)
    // stock: number;

    // @IsOptional()
    // @IsArray()
    // @ValidateNested({ each: true })
    // @Type(() => ProductReviewDto)
    // reviews: ProductReviewDto[];
}
