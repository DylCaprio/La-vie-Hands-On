const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/loginValidator");
const idValidator = require("../validators/id/idValidator");
const auth = require("../middlewares/auth");
const atendimentosController = require("../controllers/atendimentosController");
const dashboardsController = require("../controllers/dashboardsController");

const routes = express.Router();

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", idValidator, psicologosController.buscarPeloId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", idValidator, psicologosController.alterarPerfil);
routes.delete("/psicologos/:id", idValidator, psicologosController.deletarPsicologo);
routes.post('/login', loginValidator, authController.login);

routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', idValidator, pacientesController.mostrarPacientes);
routes.post('/paciente/criar', auth, pacientesController.cadastrarPaciente);
routes.put('/pacientes/:id', idValidator, pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id', idValidator, pacientesController.deletarPaciente);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", idValidator, atendimentosController.buscarIdAtendimentos);
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimentos);

routes.get("/dashboards/psicologos", dashboardsController.listarPsicologos);
routes.get("/dashboards/pacientes", dashboardsController.listarPacientes);
routes.get("/dashboards/atendimentos", dashboardsController.listarAtendimentos);
routes.get("/dashboards/media-atendimentos", dashboardsController.mediaAtendimentos);

module.exports = routes;