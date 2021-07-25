import { NextFunction, Request, Response } from 'express'
import { error } from '../types/middlewares/error'

export function error(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
): Response<error> {
    if (error instanceof Error) {
        return response.status(400).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
}