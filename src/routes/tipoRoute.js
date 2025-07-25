import express from "express";
import { buscarTodos, buscarUm, criar, deletar, editar } from "../controllers/tipoController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os tipos"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de tipos',
            schema: [{
                tipo_id: 1,
                tipo_nome: "Nome do Tipo",             
                imoveis: [],
            }]
    } */
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    // #swagger.description = "Busca um tipo"
    /* #swagger.responses[200] = {
            description: 'Retorna um  tipo',
            schema: {
                tipo_id: 1,
                tipo_nome: "Nome do Tipo",             
                imoveis: [],
            }
    } */
    res.send(await buscarUm(req.params.id));
});

router.post("/", async (req, res) => {
    // #swagger.description = "Cria um tipo"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $tipo_nome: "Nome do tipo",
                }
        } */
    /* #swagger.responses[200] = {
            description: 'tipo criado',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    res.send(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.description = "Edita um tipo"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $tipo_id: 1,
                    $tipo_nome: "Nome do tipo",
                }
        } */
    /* #swagger.responses[200] = {
            description: 'tipo atualizado',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    res.send(await editar(req.body, req.params.id));
});


router.delete("/:id", async (req, res) => {
    // #swagger.description = "Deleta um tipo"
    /* #swagger.responses[200] = {
            description: 'tipo deletado',
            schema: {
                type: 'success',
                description: 'Registro deletado com sucesso.',
            }
    } */
    res.send(await deletar(req.params.id));
});

export default router;