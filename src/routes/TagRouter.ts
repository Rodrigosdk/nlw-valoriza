import { CreateTagController } from '../controllers/CreateTagController'
import { Application } from 'express'

export class TagRouter {
    private createTagController: CreateTagController = new CreateTagController()

    public init(app: Application): void {
        app.post('/tags', this.createTagController.handle)
    }
}
