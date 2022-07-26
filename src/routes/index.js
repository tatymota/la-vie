const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");

const routes = express.Router();

routes.get("/paciente/lista", pacienteController.listarPaciente);
routes.post("/paciente/criar", pacienteController.cadastrarPaciente);
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.post("/psicologos", psicologoController.cadastrarPsicologos);
routes.delete("/psicologos", psicologoController.deletarPsicologos);

module.exports = routes;