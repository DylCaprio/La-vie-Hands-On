const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = db.define(
  "Psicologos",
  {
    psicologo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
    apresentacao: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "psicologos",
  }
);

module.exports = Psicologos;
