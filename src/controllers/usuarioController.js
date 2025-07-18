import { prisma } from "../utils/index.js";

async function buscarTodos() {
    try {
        return await prisma.usuarios.findMany();
    } catch (error) {
        return {
            type: "error",
            description: error.message
        }
    }
}

async function buscarUm(id) {
    try {
        return await prisma.usuarios.findFirst({
            where: {
                usuario_id: Number(id)
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
        const requisicao = await prisma.usuarios.create({
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

export {
    buscarTodos,
    buscarUm,
    criar
}