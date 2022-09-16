const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes",
    {
      paciente_id: {
        type: DataTypes.INTEGER(20),
        primaryKey: true,
        autoIncrement: true,        
        allownull: false,
      },

      nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      idade: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
      },
    },
    {
      tableName: "pacientes",
      timestamps: false,
    },
  );
  
  module.exports = Pacientes;