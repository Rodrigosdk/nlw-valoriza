import express from 'express'

import {UserRouter} from './routes/UserRouter'

export class App {
    private app: express.Application
    
    private userRouter: UserRouter = new UserRouter();

    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.app.use(express.json())
    }

    private routes(): void {
        this.userRouter.init(this.app)
    }

    public run(port: number): string {
        this.app.listen(port)
        return `server in http://localhost:${port}`
    }
}