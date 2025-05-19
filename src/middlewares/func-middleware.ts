import { NextFunction , Request, Response} from "express";

export const Middleware2 =  (req: Request, res: Response, next: NextFunction)=>{
    console.log(" this is function  middleware ")
    next()
}