const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const atendimentoController = require("../controllers/atendimentoController");
const userCreateValidation = require("../validations/users/create");
const authLoginValidation = require("../validations/auth/login");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");


const routes = express.Router();
//Rotas Pacientes
routes.get("/paciente", pacienteController.listarPaciente);
routes.get("/paciente/:id", pacienteController.listarPacienteId);
routes.post("/paciente", pacienteController.cadastrarPaciente);
routes.delete("/paciente/:id", pacienteController.deletarPaciente);
routes.put("/paciente/:id", pacienteController.atualizarPaciente);
//Rotas Psicologos
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologos/:id", psicologoController.listarPsicologosId);
routes.post("/psicologos", userCreateValidation, psicologoController.cadastrarPsicologos);
routes.post("/login", authLoginValidation, authController.login);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologos);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologos);
//Rotas Atendimento
routes.get("/atendimento", atendimentoController.listarAtendimentos);
routes.get("/atendimento/:id", atendimentoController.listarAtendimentoId);
routes.post("/atendimento", atendimentoController.cadastrarAtendimentos);
routes.delete("/atendimento/:id", atendimentoController.deletarAtendimentos);
routes.put("/atendimento/:id", atendimentoController.atualizarAtendimentos);
module.exports = routes;