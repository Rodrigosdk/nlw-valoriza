import {Request,Response} from 'express'
import { AuthenticateUsersServices } from '../services/AuthenticateUsersServices'

export class AuthenticateUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email ,password } = request.body

        const createAuthenticateController = new AuthenticateUsersServices();
        const token = await createAuthenticateController.execute({email, password})

        return response.json(token);
    }
}