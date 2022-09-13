const express = require("express");
// controllers
const psicologoController = require('../controllers/psicologoController')
// rotas
const routes = express.Router();
routes.get("/psicologos", psicologoController.listarPsicologo);
routes.post("/psicologo/criar", psicologoController.cadastrarPsicologo);

module.exports = routes;