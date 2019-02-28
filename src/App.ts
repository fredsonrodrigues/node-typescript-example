import express from "express";

class App {

    public express: express.Application;
    
    constructor() {
        this.express = express();
        this.middleware()
        this.routes()
    }
    /* 
        Configurações de Middleware (CORS, Body Parser.. )
    */
    private middleware(): void {
        
    }

    /* 
        As rotas são carregadas aqui
    */
    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res) => {
            res.json({
                message: 'Olá Typescript'
            });
        });

        // Rotas importadas
        this.express.use('/', router);
    }
}
export default new App().express;