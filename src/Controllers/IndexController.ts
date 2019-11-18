import {Router, Request, Response} from "express";

class IndexController {

    public router: Router;
    
    constructor() {
        this.router = Router();
        this.routes()
    }

    public index(req: Request, res: Response): Response {
        return res.json({ message: 'Olá Typescript'});
    }

    public routes(): void {
        // Rotas importadas
        this.router.get('/', this.index);
    }
}

const Index = new IndexController().router
export default Index