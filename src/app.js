const express = require("express");

const routes = require('./routes');

const db = require("./database")

const app = express();

db.hasConnection();

app.use(express.json());

app.use(routes);

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"));