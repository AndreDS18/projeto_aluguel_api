import express from "express";
import cors from "cors";
import usuarioRoutes from "./src/routes/usuarioRoute.js";
import favoritosRoutes from "./src/routes/favoritosRoute.js";
import tipoRoutes from "./src/routes/tipoRoute.js";
import imovelRoutes from "./src/routes/imovelRoute.js";
import imoveis_imagensRoutes from "./src/routes/imoveis_imagensRoute.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/docs/documentacao.json' with { type: 'json' };
import { login } from "./src/controllers/usuarioController.js";
import { rotaProtegida } from "./src/utils/index.js";


const app = express();
const port = 8000;

// Interceptadores
app.use(cors()); // permite que endereços externos façam requisições
app.use(express.json()); // transforma o corpo da requisição em objeto javascript

// Rotas

app.get("/", (req ,res) => {
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                type: 'error',
                description: 'mensagem do sistema',
            }
    } */
    res.redirect("/docs")
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post("/login", async (req, res) => {
    res.json(await login(req.body));
})
app.use("/usuarios", 
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                type: 'error',
                description: 'mensagem do sistema',
            }
    } */
    usuarioRoutes
);

app.use("/tipos", 
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                type: 'error',
                description: 'mensagem do sistema',
            }
    } */
    tipoRoutes
);

app.use("/imagens", 
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                type: 'error',
                description: 'mensagem do sistema',
            }
    } */
    imoveis_imagensRoutes
);

app.use("/imoveis", 
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                type: 'error',
                description: 'mensagem do sistema',
            }
    } */
    imovelRoutes
);

app.use("/favoritos", 
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                type: 'error',
                description: 'mensagem do sistema',
            }
    } */
    favoritosRoutes
);

app.listen(port, () => {
    console.log(`Servidor de pé: http://localhost:${port}`);
})