import { CreateUserController } from '../controllers/CreateUserController'
import {Application} from 'express'

export class UserRouter {

    private createUserController: CreateUserController = new CreateUserController()

    public init(app:Application): void {
        app.post('/users', this.createUserController.handle);
    }
}
