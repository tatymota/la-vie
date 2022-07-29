const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimento = require("./Atendimento");

Atendimento.belongsTo(Psicologos,{
    foreignKey: "psicologos_id"
});

Psicologos.hasMany(Atendimento,{
    foreignKey: "psicologos_id"
});

Atendimento.belongsTo(Pacientes,{
    foreignKey: "pacientes_id"
});


Pacientes.hasMany(Atendimento,{
    foreignKey: "pacientes_id"
});



module.exports = {
    Atendimento, 
    Pacientes,
    Psicologos
};

