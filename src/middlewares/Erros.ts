import {NextFunction, Request,Response} from 'express'

export function error(request:Request, response:Response,error:Error, next:NextFunction): Response{
    if (error instanceof Error){
        return response.status(400).json({"error": error.message})
    }
    
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
}