const db = require("../database");
const { DataTypes } = require("sequelize");
const Atendimento = db.define(
  "Atendimento",
  {
    id_atendimento: {
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