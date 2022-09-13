const Psicologos = require("../models/Psicologos");

const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listaDePsicologos = await Psicologos.findAll();
          
          res.json(listaDePsicologos);
    },
    async cadastrarPsicologo(req, res) {
        const { psicologo_id, nome, email, senha, apresentacao } = req.body;
    
        const novoPsicologo = await Psicologos.create({
          psicologo_id,
          nome,
          email,
          senha,
          apresentacao,
        });

        res.status(201).json(novoPsicologo);
}
}

module.exports = psicologoController;
