const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes",
    {
      paciente_id: {
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
      idade: {
        type: DataTypes.INTEGER,
      }
    },
    {
      tableName: "pacientes",
    }
  );
  
  module.exports = Pacientes;