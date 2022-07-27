const Pacientes = require("./pacientes");
const Psicologos = require("./Psicologos");
const Atendimento = require("./Atendimento");

Atendimento.belongsTo(Psicologos,{
    foreignKey: "psicologos_id"
});

Atendimento.belongsTo(Pacientes,{
    foreignKey: "pacientes_id"
});
Psicologos.hasMany(Atendimento,{
    foreignKey:"psicologos_id"
});
module.exports = {
    Atendimento, 
    Pacientes,
    Psicologos
};

