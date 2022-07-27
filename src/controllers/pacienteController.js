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
            res.json("Id não encontrado!");
        } else {
            res.json(paciente);
        }
    },

    async cadastrarPaciente(req, res) {
        try {
            const { nome, email, idade } = req.body
            const novoPaciente = await Pacientes.create({
                nome,
                email,
                idade,
            });

            if (!cadastrarPaciente) {
                res.status(400).json("Erro na requisição");
            } else {
                res.status(201).json(novoPaciente);
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async deletarPaciente(req, res) {
        const { id } = req.params;

        await Pacientes.destroy({
            where: {
                id,
            },
        });

        res.status(200).json("Paciente deletado com sucesso!");
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
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

        if (!nome || !email || !idade) {
            return res.status(400).json({ error: "Os parâmetros não foram enviados da forma correta" })
        }

        //preciso de ajuda, esse está dando erro :(
        res.status(204).json(atualizarPaciente);
    },
};

module.exports = pacienteController;
