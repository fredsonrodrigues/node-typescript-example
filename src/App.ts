import express, {Application} from "express";
import { routes } from "./Routes";

class App {

    public express: Application;
    
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
        // Rotas importadas
        routes.map(el => this.express.use(el.path, el.controller))
    }
}
export default new App().express;