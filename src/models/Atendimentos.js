const db = require ("../database");
const { DataTypes } = require ("sequelize");

const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
  "Atendimentos",
  {
      atendimento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      paciente_id: {
        type: DataTypes.INTEGER,
        references:{
          model: Pacientes,
          key: "id",
        },
      },
      psicologo_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Psicologos,
          key: "id",
        },
      },
      data_atendimento: {
        type: DataTypes.DATEONLY,
      },
      observacao: {
        type: DataTypes.TEXT,
      },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);

module.exports = Atendimentos;