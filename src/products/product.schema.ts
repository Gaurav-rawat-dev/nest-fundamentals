import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

export type ProductDocument = Product & Document

@Schema({ timestamps: true })
export class Product {

    @Prop({ require: true, trim: true })
    title: string

    @Prop({ type: String })
    description?: string;

    @Prop({ type: Number, required: true, min: 0 })
    price: number;

    @Prop({
        type: String,
        enum: ['in_stock', 'out_of_stock', 'discontinued'],
        default: 'in_stock',
    })
    status: string;


    // @Prop({ type: [String], default: [] })
    // tags: string[];


    // @Prop({
    //     type: [{ url: String, label: String }],
    //     _id: false,
    // })
    // images: { url: string; label?: string }[];


    // @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
    // createdBy: Types.ObjectId;

    // @Prop({ default: 0 })
    // sold: number;

    // @Prop({ default: 0 })
    // stock: number;

    // @Prop({
    //     type: [{ userId: SchemaTypes.ObjectId, rating: Number, comment: String }],
    //     _id: false,
    // })
    // reviews: {
    //     userId: Types.ObjectId;
    //     rating: number;
    //     comment?: string;
    // }[];


}

export const ProductSchema = SchemaFactory.createForClass(Product);
