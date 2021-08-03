import { CreateTagController } from '../controllers/CreateTagController'
import { Application } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'

export class TagRouter {
    private createTagController: CreateTagController = new CreateTagController()

    public init(app: Application): void {
        app.post('/tags',ensureAdmin, this.createTagController.handle)
    }
}
