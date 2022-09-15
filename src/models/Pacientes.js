const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
      },
      nome: {
        type: DataTypes.STRING(150),
      },
      email: {
        type: DataTypes.STRING(100),
      },
      idade: {
        type: DataTypes.INTEGER(5),
      }
    },
    {
      tableName: "pacientes",
    }
  );
  
  module.exports = Pacientes;