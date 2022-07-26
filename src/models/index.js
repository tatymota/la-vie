const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimento = require("./Atendimento");

Atendimento.hasOne(Psicologos,{
    foreignKey: "psicologos_id"
});

Atendimento.hasOne(Pacientes,{
    foreignKey: "pacientes_id"
});

module.exports = {
    Atendimento, 
    Pacientes,
    Psicologos
};

