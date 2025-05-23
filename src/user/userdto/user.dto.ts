import {  IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDTO {
    @IsString()
    name : string

    @IsInt()
    age : number

    @IsString()
    @IsNotEmpty({message : "role cannot be empty"})
    role: string
}