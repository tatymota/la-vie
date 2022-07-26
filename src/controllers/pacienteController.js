const {Pacientes} = require ("../models/index")
const pacienteController = {
    listarPaciente: (req, res) => {
        res.json([{ nome: "Paciente 1" }, { nome: "Paciente 2"}]);
    },

    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body
        
        const novoPaciente = await Pacientes.create({
            nome, 
            email, 
            idade,
        })

        res.json(novoPaciente);
    },
};

module.exports = pacienteController;