import { prisma } from "../utils/index.js";

async function buscarTodos() {
    try {
        return await prisma.imoveis.findMany({
            include:{
                tipos: true,
                usuarios: true
            }
        });
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarUm(id) {
    try {
        return await prisma.imoveis.findFirst({
            where: {
                imovel_id: Number(id)
            }
        });
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarPorUsuario(id) {
    try {
        return await prisma.imoveis.findMany({
            where: {
                usuario_id: Number(id)
            },
            include:{
                tipos: true
            }
        });
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function criar(dados) {
    try {
        const requisicao = await prisma.imoveis.create({
            data: dados
        });

        if (requisicao) {
            return {
                type: "success",
                description: "Registro criado com sucesso"
            }
        }

    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function editar(dados, id) {
    try {
        const requisicao = await prisma.imoveis.update({
            data: dados,
            where: {
                imovel_id: Number(id)
            }
        });

        if (requisicao) {
            return {
                type: "success",
                description: "Registro atualizado com sucesso"
            }
        }

    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function deletar(id) {
    try {
        const requisicao = await prisma.imoveis.delete({
            where: {
                imovel_id: Number(id)
            }
        });

        if (requisicao) {
            return {
                type: "success",
                description: "Registro deletado com sucesso"
            }
        }

    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

export {
    buscarTodos,
    buscarUm,
    buscarPorUsuario,
    criar,
    editar,
    deletar
}