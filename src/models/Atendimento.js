const db = require("../database");
const Psicologos = require("./Psicologos");
const Pacientes = require ("./Pacientes");
const { DataTypes } = require("sequelize");
const Atendimento = db.define(
  "Atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.STRING,
    },
    psicologos_id:{
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id",
      },
    },
    pacientes_id:{
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
      },
    },
    { tableName: "atendimento" }
  );
  
  module.exports = Atendimento;