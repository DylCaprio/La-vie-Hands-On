const express = require("express");
// controllers
const psicologoController = require('../controllers/psicologoController')
const pacienteController = require('../controllers/pacienteController')
// rotas
const routes = express.Router();
routes.get("/psicologos", psicologoController.listarPsicologo);
routes.post("/psicologo/criar", psicologoController.cadastrarPsicologo);
routes.get("/pacientes", pacienteController.listarPacientes);
routes.post("/paciente/criar", pacienteController.cadastrarPaciente);

module.exports = routes;