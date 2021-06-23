import {NextFunction, Request,response,Response} from 'express'

export function error(error:Error, request:Request, response:Response, next:NextFunction): Response{
    if (error instanceof Error){
        return response.status(400).json({"error": error.message})
    }
    
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
}