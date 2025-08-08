import express from "express";
import { buscarTodos, buscarUm, criar, deletar, editar } from "../controllers/favoritosController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os faviritos"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de favoritos',
            schema: [{
                favorito_id: 1,
                usuario_id: 1,
                imovel_id: 1,
            }]
    } */
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    // #swagger.description = "Busca um favorito"
    /* #swagger.responses[200] = {
            description: 'Retorna um  usuario',
            schema: {
                favorito_id: 1,
                usuario_id: 1,
                imovel_id: 1,
            }
    } */
    res.send(await buscarUm(req.params.id));
});

router.post("/", async (req, res) => {
    // #swagger.description = "Cria um favorito"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $favorito_id: 1,
                    $usuario_id: 1,
                    $imovel_id: 1,
                }
        } */
    /* #swagger.responses[200] = {
            description: 'favorito criada',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    res.send(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.description = "Edita um favorito"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $favorito_id: 1,
                    $usuario_id: 1,
                    $imovel_id: 1,
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Favorito atualizada',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    res.send(await editar(req.body, req.params.id));
});


router.delete("/:id", async (req, res) => {
    // #swagger.description = "Deleta um favorito"
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