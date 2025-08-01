import express from "express";
import { buscarTodos, buscarUm, criar, deletar, editar } from "../controllers/imoveis_imagensController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os usuários"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de imagens',
            schema: [{
                imagem_id: 1,
                imagem_url: "Nome da URL",
                imovel_id: 1
            }]
    } */
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    // #swagger.description = "Busca uma imagem"
    /* #swagger.responses[200] = {
            description: 'Retorna um  usuario',
            schema: {
                imagem_id: 1,
                imagem_url: "Nome da URL",
                imovel_id: 1
            }
    } */
    res.send(await buscarUm(req.params.id));
});

router.post("/", async (req, res) => {
    // #swagger.description = "Cria uma imagem"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $imagem_id: 1,
                    $imagem_url: "Nome da URL",
                    $imovel_id: 1,
                }
        } */
    /* #swagger.responses[200] = {
            description: 'imagem criada',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    res.send(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.description = "Edita uma imagem"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $imagem_id: 1,
                    $imagem_url: "Nome da URL",
                    $imovel_id: 1,
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Imagem atualizada',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    res.send(await editar(req.body, req.params.id));
});


router.delete("/:id", async (req, res) => {
    // #swagger.description = "Deleta uma imagem"
    /* #swagger.responses[200] = {
            description: 'imagem deletada',
            schema: {
                type: 'success',
                description: 'Registro deletado com sucesso.',
            }
    } */
    res.send(await deletar(req.params.id));
});

export default router;