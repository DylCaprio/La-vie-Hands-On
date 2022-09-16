const Psicologos = require('../models/Psicologos');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const authController = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const psicologoLogin = await Psicologos.findOne({
                where: {
                    email
                }
            });

            if (!psicologoLogin || !bcrypt.compareSync(senha, psicologoLogin.senha)) {
                return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente.");
            };

            const token = jwt.sign({
                id: psicologoLogin.id,
                nome: psicologoLogin.nome,
                email: psicologoLogin.email,
            }, secret.key);

            return res.status(200).json(token);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro no servidor!");
        };
    },
};

module.exports = authController;