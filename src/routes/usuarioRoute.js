import express from "express";
import { buscarTodos, buscarUm, criar, deletar, editar } from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os usuários"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de usuarios',
            schema: [{
                usuario_id: 1,
                usuario_nome: "Nome do Usuario",
                usuario_email: "email@email.com",
                usuario_senha: "senha-encriptada",
                favoritos: [],
                imoveis: [],
            }]
    } */
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    // #swagger.description = "Busca um usuário"
    /* #swagger.responses[200] = {
            description: 'Retorna um  usuario',
            schema: {
                usuario_id: 1,
                usuario_nome: "Nome do Usuario",
                usuario_email: "email@email.com",
                usuario_senha: "senha-encriptada",
                favoritos: [],
                imoveis: [],
            }
    } */
    res.send(await buscarUm(req.params.id));
});

router.post("/", async (req, res) => {
    // #swagger.description = "Cria um usuario"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $usuario_nome: "Nome do Usuario",
                    $usuario_email: "email@email.com",
                    $usuario_senha: "senha-usuario",
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Usuario criado',
            schema: {
                type: 'success',
                description: 'Registro criado com sucesso.',
            }
    } */
    res.send(await criar(req.body));
});

router.put("/:id", async (req, res) => {
    // #swagger.description = "Edita um usuario"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $usuario_id: 1,
                    $usuario_nome: "Nome do Usuario",
                    $usuario_email: "email@email.com",
                    $usuario_senha: "senha-usuario",
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Usuario atualizado',
            schema: {
                type: 'success',
                description: 'Registro atualizado com sucesso.',
            }
    } */
    res.send(await editar(req.body, req.params.id));
});


router.delete("/:id", async (req, res) => {
    // #swagger.description = "Deleta um usuario"
    /* #swagger.responses[200] = {
            description: 'Usuario deletado',
            schema: {
                type: 'success',
                description: 'Registro deletado com sucesso.',
            }
    } */
    res.send(await deletar(req.params.id));
});

export default router;