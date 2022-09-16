const express = require("express");

const cors = require("cors");

const routes = require("./routes");

const handleError = require('./middlewares/handleError');

const db = require('./database');

const porta = 3000;


const app = express();


db.hasConnection();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(handleError);

app.listen(porta, () => console.log("Servidor rodando na porta 3000"));