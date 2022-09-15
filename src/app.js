const express = require("express");

const routes = require('./routes');

const db = require("./database");

const porta = 3000;

const app = express();

db.hasConnection();

app.use(express.json());

app.use(routes);

app.listen(porta, () => console.log("Servidor rodando na porta 3000"));