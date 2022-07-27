const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const atendimentoController = require("../controllers/atendimentoController");

const routes = express.Router();
//Rotas Pacientes
routes.get("/paciente/lista", pacienteController.listarPaciente);
routes.get("/paciente/:id", pacienteController.listarPacienteId);
routes.post("/paciente/criar", pacienteController.cadastrarPaciente);
routes.delete("/paciente/:id", pacienteController.deletarPaciente);
routes.put("/paciente/:id", pacienteController.atualizarPaciente);
//Rotas Psicologos
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologos/:id", psicologoController.listarPsicologosId);
routes.post("/psicologos", psicologoController.cadastrarPsicologos);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologos);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologos);
//Rotas Atendimento
routes.get("/atendimento", atendimentoController.listarAtendimentos);
routes.get("/atendimento/:id", atendimentoController.listarAtendimentoId);
routes.post("/atendimento", atendimentoController.cadastrarAtendimentos);
routes.delete("/atendimento/:id", atendimentoController.deletarAtendimentos);
routes.put("/atendimento/:id", atendimentoController.atualizarAtendimentos);
module.exports = routes;