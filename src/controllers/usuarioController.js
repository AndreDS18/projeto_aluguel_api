import { prisma } from "../utils/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
        const emailCadastrado = await prisma.usuarios.findFirst({
            where: {
                usuario_email: dados.usuario_email
            }
        })
        if (emailCadastrado) {
            return {
                type: "warning",
                description: "Já existe um usuário com esse email"
            }
        } else {
            const senhaCriptografada = await bcrypt.hash(dados.usuario_senha, 10);
            const requisicao = await prisma.usuarios.create({
                data: { ...dados, usuario_senha: senhaCriptografada }
            });

            if (requisicao) {
                return {
                    type: "success",
                    description: "Registro criado com sucesso"
                }
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
        const senhaCriptografada = await bcrypt.hash(dados.usuario_senha, 10);
        const requisicao = await prisma.usuarios.update({
            data: { ...dados, usuario_senha: senhaCriptografada },
            where: {
                usuario_id: Number(id)
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
        const requisicao = await prisma.usuarios.delete({
            where: {
                usuario_id: Number(id)
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

async function login(dados) {
    try {
        const usuario = await prisma.usuarios.findFirst({
            where: {
                usuario_email: dados.usuario_email
            }
        })

        if (usuario) {
            let senhaEstaCorreta = await bcrypt.compare(dados.usuario_senha, usuario.usuario_senha)
            if (senhaEstaCorreta) {
                let token = jwt.sign({ usuario_id: usuario.usuario_id }, process.env.CHAVE, { expiresIn: "1h" });
                return {
                    type: "success",
                    description: "Seja bem-vindo(a)",
                    usuario,
                    token
                };
            } else {
                return {
                    type: "warning",
                    description: "Email ou senha inválido"
                }
            }
        }
        return {
            type: "warning",
            description: "Email ou senha inválido"
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
    deletar,
    login
}