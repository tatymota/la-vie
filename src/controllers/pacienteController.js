const pacienteController = {
    listarPaciente: (req, res) => {
        res.json([{ nome: "Paciente 1" }, { nome: "Paciente 2"}]);
    },

    cadastrarPaciente(req, res) {
        console.log(req.body);
        res.json("Paciente cadastrado");
    },
};

module.exports = pacienteController;