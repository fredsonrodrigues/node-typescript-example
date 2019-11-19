import { Router, Request, Response } from "express";

export default class DefaultController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes()
    }

    public index(req: Request, res: Response): Response {
        return res.json({ message: 'Olá Typescript' });
    }

    public routes(): void {
        // Rotas importadas
    }
}