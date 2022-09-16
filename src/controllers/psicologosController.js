const { Psicologos, Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const psicologosController = {
    async cadastrarPsicologo(req, res) {
            try {
            const { nome, email, senha, apresentacao } = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);

            if (!nome || !email || !senha || !apresentacao) {
                return res.status(400).json("Preencha todos os campos corretamente");
            };

            const novoPsicologo = await Psicologos.create({ nome, email, senha: novaSenha, apresentacao });
            return res.status(201).json(novoPsicologo);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro ao cadastrar");
        }
    },

    async listarPsicologos(req, res) {
        try {
            const { page = 1, limit = 20 } = req.query;
            const offset = parseInt(limit) * (parseInt(page) - 1);

            let filter = {
                limit: parseInt(limit),
                offset
            };

            const psicologos = await Psicologos.findAll(filter);

            return res.status(200).json(psicologos);
        }
        catch (error) {
            console.error(error);
            return res.status(404).json("Não foi possivel localizar dados");
          };
    },

    async buscarPeloId(req, res) {
        try {
            const { id } = req.params;
            const psicologos = await Psicologos.findByPk(id);

            if (!psicologos) {
                return res.status(404).json("Id não encontrado");
            };

            return res.status(200).json(psicologos);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Não foi possivel localizar dados");
        }
    },

    async alterarPerfil(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;
            const existsUser = await Psicologos.count({
                where: {
                    email
                }
            });

            if (existsUser) {
              return res.status(400).json("Email ja cadastrado");
            };

            await Psicologos.update(
                {
                    nome,
                    email,
                    senha,
                    apresentacao
                },
                {
                    where: {
                        id
                    },
                }
            );

            const psicologoAtualizado = await Psicologos.findByPk(id);

            if (!psicologoAtualizado) {
                return res.status(400).json("Id não encontrado!");
            };

            return res.status(200).json(psicologoAtualizado);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro ao atualizar dados");
        }
    },

    async deletarPsicologo(req, res) {
        try {
            const { id } = req.params;
            const psicologoById = await Psicologos.count({
                where: {
                    id
                }
            });

            const existsAtendimento = await Atendimentos.count({
                where: {
                    psicologo_id: id
                }
            });

            if (psicologoById == 0) {
                return res.status(404).json("Id não encontrado");
            };

            if (existsAtendimento != 0) {
              return res.status(400).json("Erro ao deletar, atendimento marcado");
            };

            await Psicologos.destroy({
                where: {
                    id
                },
            });

            return res.status(204).json("Psicólogo apagado com sucesso!");
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro ao deletar");
        };
    },
};

module.exports = psicologosController;