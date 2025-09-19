import express from "express";
import { buscarPorUsuario, buscarTodos, buscarUm, criar, deletar, editar } from "../controllers/imovelController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // #swagger.description = "Busca todos os imoveis"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de imoveis',
            schema: [{
                imovel_id: 1,
                imovel_nome: "imovel nome",
                imovel_endereco: "endereco",
                imovel_endereco_numero: 90,
                imovel_bairro: "bairro",
                imovel_cidade: "cidade",
                imovel_estado: "estado",
                imovel_complemento: "complemento",
                imovel_quartos: 3,
                imovel_banheiros: 2,
                imovel_garagens: 1,
                imovel_metragem: 100,
                imovel_disponibilidade: "aluguel ou venda",
                imovel_descricao: "descrição",
                usuario_id: 1,
                tipo_id: 1,
                favoritos: [],
                usuarios: {},
                tipos: {},
                imoveis_imagens: []
            }]
    } */
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    // #swagger.description = "Busca um imovel"
    /* #swagger.responses[200] = {
            description: 'Retorna um  imovel',
            schema: {
                imovel_id: 1,
                imovel_nome: "imovel nome",
                imovel_endereco: "endereco",
                imovel_endereco_numero: 90,
                imovel_bairro: "bairro",
                imovel_cidade: "cidade",
                imovel_estado: "estado",
                imovel_complemento: "complemento",
                imovel_quartos: 3,
                imovel_banheiros: 2,
                imovel_garagens: 1,
                imovel_metragem: 100,
                imovel_disponibilidade: "aluguel ou venda",
                imovel_descricao: "descrição",
                usuario_id: 1,
                tipo_id: 1,
                favoritos: [],
                usuarios: {},
                tipos: {},
                imoveis_imagens: []
            }
    } */
    res.send(await buscarUm(req.params.id));
});

router.get("/usuario/:id", async (req, res) => {
    // #swagger.description = "Busca imóveis por usuario"
    /* #swagger.responses[200] = {
            description: 'Retorna lista de imóveis do usuario',
            schema: [{
                imovel_id: 1,
                imovel_nome: "imovel nome",
                imovel_endereco: "endereco",
                imovel_endereco_numero: 90,
                imovel_bairro: "bairro",
                imovel_cidade: "cidade",
                imovel_estado: "estado",
                imovel_complemento: "complemento",
                imovel_quartos: 3,
                imovel_banheiros: 2,
                imovel_garagens: 1,
                imovel_metragem: 100,
                imovel_disponibilidade: "aluguel ou venda",
                imovel_descricao: "descrição",
                usuario_id: 1,
                tipo_id: 1,
                favoritos: [],
                usuarios: {},
                tipos: {},
                imoveis_imagens: []
            }]
    } */
    res.send(await buscarPorUsuario(req.params.id));
});

router.post("/", async (req, res) => {
    // #swagger.description = "Cria um imovel"
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $imovel_id: 1,
                    $imovel_nome: "imovel nome",
                    $imovel_endereco: "endereco",
                    $imovel_endereco_numero: 90,
                    $imovel_bairro: "bairro",
                    $imovel_cidade: "cidade",
                    $imovel_estado: "estado",
                    $imovel_complemento: "complemento",
                    $imovel_quartos: 3,
                    $imovel_banheiros: 2,
                    $imovel_garagens: 1,
                    $imovel_metragem: 100,
                    $imovel_disponibilidade: "compra ou venda",
                    $imovel_descricao: "descrição",
                    $usuario_id: 1,
                    $tipo_id: 1
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
                    $imovel_id: 1,
                    $imovel_nome: "imovel nome",
                    $imovel_endereco: "endereco",
                    $imovel_endereco_numero: 90,
                    $imovel_bairro: "bairro",
                    $imovel_cidade: "cidade",
                    $imovel_estado: "estado",
                    $imovel_complemento: "complemento",
                    $imovel_quartos: 3,
                    $imovel_banheiros: 2,
                    $imovel_garagens: 1,
                    $imovel_metragem: 100,
                    $imovel_disponibilidade: "compra ou venda",
                    $imovel_descricao: "descrição",
                    $usuario_id: 1,
                    $tipo_id: 1
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