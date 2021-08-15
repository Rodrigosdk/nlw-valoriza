import { AuthenticateUsersController } from '../controllers/AuthenticateUsersController'
import { Application } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'

export class AuthenticateRouter {
    private authenticateUsersController: AuthenticateUsersController = new AuthenticateUsersController()

    public init(app: Application): void {
        app.post('/login', this.authenticateUsersController.handle)
    }
}
