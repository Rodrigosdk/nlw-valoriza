import { Request, Response } from 'express'

export interface baseController {
    handle(request: Request, response: Response): Promise<Response>;
}