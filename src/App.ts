import express from 'express'
import 'express-async-errors'

import { UserRouter } from './routes/UserRouter'
import { TagRouter } from './routes/TagRouter'

import {error} from './middlewares/Erros'
export class App {
    private app: express.Application

    private userRouter: UserRouter = new UserRouter();
    private tagRouter: TagRouter = new TagRouter();

    constructor() {
        this.app = express()
        this.routes()
        this.middlewares()
    }

    private middlewares(): void {
        this.app.use(error)
    }

    private routes(): void {
        this.app.use(express.json())
        this.userRouter.init(this.app)
        this.tagRouter.init(this.app)

    }

    public run(port: number): string {
        this.app.listen(port)
        return `server in http://localhost:${port}`
    }
}