import express from 'express'
import 'express-async-errors'

import { UserRouter } from './routes/UserRouter'

import {error} from './middlewares/Erros'
export class App {
    private app: express.Application

    private userRouter: UserRouter = new UserRouter();

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
    }

    public run(port: number): string {
        this.app.listen(port)
        return `server in http://localhost:${port}`
    }
}