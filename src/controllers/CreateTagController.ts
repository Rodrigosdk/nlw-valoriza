import {Request,Response} from 'express'
import {CreateTagServices} from '../services/CreateTagServices'
import { baseController } from '../types/controllers/baseController';

export class CreateTagController implements baseController{
    async handle(request:Request, response:Response): Promise<Response>{
        const {name} = request.body

        const createTagController = new CreateTagServices();
        const tag = await createTagController.execute(name)
        
        return response.json(tag);
    }
}