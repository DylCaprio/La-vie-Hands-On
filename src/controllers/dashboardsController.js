const Atendimentos = require("../models/Atendimentos");
const Psicologos = require("../models/Psicologos");
const Pacientes = require("../models/Pacientes");

const dashboardsController = {
  async listarAtendimentos(req, res) {
    try {
      const numeroAtendimentos = await Atendimentos.count();

      return res.status(200).json(numeroAtendimentos);
    }
    catch (error) {
      console.error(error);
      return res.status(400).json("Não foi possivel localizar dados");
    }
  },

  async mediaAtendimentos(req, res) {
    try {
      const numeroAtendimentos = await Atendimentos.count();
      const numeroPsicologos = await Psicologos.count();
      const media = (numeroAtendimentos / numeroPsicologos).toFixed(2);
      const numeroMedia = parseFloat(media);

      return res.status(200).json(numeroMedia);
    }
    catch (error) {
      console.error(error);
      return res.status(400).json("Não foi possivel localizar dados");
    }
  },

  async listarPsicologos(req, res) {
    try {
      const numeroPsicologos = await Psicologos.count();

      return res.status(200).json(numeroPsicologos);
    }
    catch (error) {
      console.error(error);
      return res.status(400).json("Não foi possivel localizar dados");
    }
  },

  async listarPacientes(req, res) {
    try {
      const numeroPacientes = await Pacientes.count();

      return res.status(200).json(numeroPacientes);
    }
    catch (error) {
      console.error(error);
      return res.status(400).json("Não foi possivel localizar dados");
    }
  },
};

module.exports = dashboardsController;