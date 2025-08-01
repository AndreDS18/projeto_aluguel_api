import { prisma } from "../utils/index.js";

async function buscarTodos() {
    try {
        return await prisma.favoritos.findMany();
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarUm(id) {
    try {
        return await prisma.favoritos.findFirst({
            where: {
                favoritos_id: Number(id)
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
        const requisicao = await prisma.favoritos.create({
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
        const requisicao = await prisma.favoritos.update({
            data: dados,
            where: {
                favoritos_id: Number(id)
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
        const requisicao = await prisma.favoritos.delete({
            where: {
                favoritos_id: Number(id)
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
    criar,
    editar,
    deletar
}