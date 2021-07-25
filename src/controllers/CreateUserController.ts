import {Request,Response} from 'express'
import {CreateUserServices} from '../services/CreateUserServices'
import {baseController} from './interfaces/baseController'

export class CreateUserController implements baseController{
    async handle(request:Request, response:Response): Promise<Response>{
        const {name, email, admin, password} = request.body

        const createUserServices = new CreateUserServices();
        const user = await createUserServices.execute({name, email, admin, password})
        
        return response.json(user);
    }
}