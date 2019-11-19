import { Request, Response } from "express";
import DefaultController from "./DefaultContoller";

class IndexController extends DefaultController {

    public index(req: Request, res: Response): Response {
        var resp: Object
        if (req.params.id) {
            resp = { message: `${req.params.id} diz olá para o Typescript` }
        } else {
            resp = { message: 'Olá Typescript' }
        }
        return res.json(resp);
    }

    public routes(): void {
        // Rotas importadas
        this.router.get('/', this.index);
        this.router.get('/:id', this.index);
    }
}

const Index = new IndexController().router
export default Index