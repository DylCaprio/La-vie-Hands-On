const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = db.define(
  "Psicologos",
  {
    psicologo_id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    apresentacao: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "psicologos",
    timestamps: false,
  },
);

module.exports = Psicologos;
