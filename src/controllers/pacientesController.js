const {Pacientes, Atendimentos} = require("../models");

const pacientesController = {
    async listarPacientes(req, res){
        try {
            const { page = 1, limit = 20 } = req.query;
            const offset = parseInt(limit) * (parseInt(page) - 1);

            let filter = {
                limit: parseInt(limit),
                offset
            };

            const pacientes = await Pacientes.findAll(filter);

        return res.status(200).json(pacientes);
    }
    catch (error) {
        console.error(error);
        return res.status(404).json("Não foi possivel localizar dados");
    };
},
    async mostrarPacientes(req, res) {
        try{
            const {id} = req.params;
            const pacienteEspecifico = await Pacientes.findByPk(id);

            if (!pacienteEspecifico) {
                return res.status(404).json("Id não encontrado");
            };

            return res.status(200).json(pacienteEspecifico);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Não foi possivel localizar dados");
            }
        },
    async cadastrarPaciente(req, res) {
        try{
            const {nome, email, idade} = req.body;

            if (!nome || !email || !idade){
                return res.status(400).json("Preencha corretamente os campos obrigatórios");
            };

            const pacienteNovo = await Pacientes.create({nome, email, idade});

            return res.status(201).json(pacienteNovo);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro ao cadastrar");
        };
     },
    async atualizarPaciente(req, res) {
        try {
            const {id} = req.params;
            const {nome, email, idade} = req.body;
            const existsUser = await Pacientes.count({
                where: {
                    email
                }
            });

            if (existsUser) {
                return res.status(400).json("Email ja cadastrado");
            };

            await Pacientes.update(
                {
                    nome,
                    email,
                    idade
                },
                {
                    where: {
                       paciente_id: id
                    },
                }
            );

            const pacienteAtualizado = await Pacientes.findByPk(id);

            if (!pacienteAtualizado) {
                return res.status(400).json("Id não encontrado");
            };

            return res.status(200).json(pacienteAtualizado);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro ao atualizar dados");
        }
    },

    async deletarPaciente(req, res){
        try {
            const {id} = req.params;
            const existPaciente = await Pacientes.count({
                where: {
                    id
                }
            });

            const existAtendimento = await Atendimentos.count({
                where: {
                    paciente_id: id
                }
            });

            if (existPaciente == 0){
                return res.status(404).json("Id não encontrado");
            };

            await Pacientes.destroy({
                where: {
                    id
                }
            });

            return res.status(204).json("Paciente deletado");
        }
        
        catch (error) {
            console.error(error);
            return res.status(400).json("Erro ao deletar");
        };
    }
};

module.exports = pacientesController;