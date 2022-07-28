const { Pacientes } = require("../models")
const pacienteController = {
    async listarPaciente(req, res) {
        try {
            const listarPaciente = await Pacientes.findAll();
            res.status(200).json(listarPaciente);
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async listarPacienteId(req, res) {
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);
        if (paciente === null) {
            res.status(404).json("Id não encontrado!");
        } else {
            res.status(200).json(paciente);
        }
    },

    async cadastrarPaciente(req, res) {
        console.log(req.user);
        const { nome, email, idade } = req.body

        if (!nome || !email || !idade) {

            return res.status(400).json("Erro na requisição");
        } else {
            const novoPaciente = await Pacientes.create({
                nome,
                email,
                idade,
            });

            res.status(201).json(novoPaciente);
        }
    },

    async deletarPaciente(req, res) {
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);

        if (paciente === null) {

            return res.status(400).json("Erro");

        } else {
            await Pacientes.destroy(
                {
                    where: {
                        id,
                    },
                }
            );
        };

        res.status(200).json("Paciente deletado com Sucesso");
    },


    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
        
        if (!nome || !email || !idade) {
            return res.status(400).json("Erro");

        } else {
            const pacienteAtualizado = await Pacientes.update(
                {
                    nome,
                    email,
                    idade
                },
                {
                    where: {
                        id,
                    },
                }
            );
        };

        res.status(200).json("Paciente atualizado com Sucesso");
    },

};

module.exports = pacienteController;
