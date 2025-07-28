import express from "express";
import { buscarTodos, buscarUm, criar, deletar, editar } from "../controllers/imovelCoontroller.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os imoveis"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de imoveis',
            schema: [{
                tipo_id: 1,
                tipo_nome: "Nome do Imovol",             
                imoveis: [],
            }]
    } */
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    // #swagger.description = "Busca um imovel"
    /* #swagger.responses[200] = {
            description: 'Retorna um  imovel',
            schema: {
                tipo_id: 1,
                tipo_nome: "Nome do Imovel",             
                imoveis: [],
            }
    } */
    res.send(await buscarUm(req.params.id));
});

router.post("/", async (req, res) => {
    // #swagger.description = "Cria um imovel"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $tipo_nome: "Nome do imove.",
                }
        } */
    /* #swagger.responses[200] = {
            description: 'imovel criado',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    res.send(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.description = "Edita um imovel"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $tipo_id: 1,
                    $tipo_nome: "Nome do imovel",
                }
        } */
    /* #swagger.responses[200] = {
            description: 'imovel atualizado',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    res.send(await editar(req.body, req.params.id));
});


router.delete("/:id", async (req, res) => {
    // #swagger.description = "Deleta um imovel"
    /* #swagger.responses[200] = {
            description: 'imovel deletado',
            schema: {
                type: 'success',
                description: 'Registro deletado com sucesso.',
            }
    } */
    res.send(await deletar(req.params.id));
});

export default router;