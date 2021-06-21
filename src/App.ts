import express from 'express'

export class App {
    private app: express.Application

    constructor() {
        this.app = express()
        this.middlewares()
    }

    private middlewares(): void {
        this.app.use(express.json())
    }

    public run(port: number): string {
        this.app.listen(port)
        return `server in http://localhost:${port}`
    }
}