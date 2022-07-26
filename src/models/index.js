const Atendimento = require("./Atendimento");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Psicologos.belongsTo(Atendimento,{
    foreignKey: "psicologos_id"
});
Pacientes.belongsTo(Atendimento, {
    foreingKey: "pacientes_id",
    });


module.exports = {
    Atendimento, 
    Pacientes,
    Psicologos
};

