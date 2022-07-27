const { Atendimento } = require("../models")
const atendimentoController = {

    listarAtendimentos: async (req, res) => {
        const listarAtendimentos = await Atendimento.findAll();

        res.status(200).json(listarAtendimentos);
    },

    async listarAtendimentoId(req, res) {
        const { id } = req.params;
        const atendimento = await Atendimento.findByPk(id);
        if (atendimento === null) {
            res.json("Id não encontrado!");
        } else {
            res.json(atendimento);
        }
    },

    async cadastrarAtendimentos(req, res) {
        const { pacientes_id, data_atendimento, observacao, psicologos_id } = req.body

        const novoAtendimento = await Atendimento.create({
            pacientes_id,
            data_atendimento,
            observacao,
            psicologos_id
        })

        res.status(201).json(novoAtendimento);
    },
    async deletarAtendimentos(req, res) {
        const { id } = req.params;
        await Atendimento.destroy({
            where: {
                id,
            },
        });

        res.status(200).json("Atendimento deletado com sucesso!");
    },
    async atualizarAtendimentos(req, res) {
        const { id } = req.params;
        const { pacientes_id, data_atendimento, observacao, psicologos_id } = req.body;
        const atendimentoAtualizado = await Atendimento.update(
            {
                pacientes_id,
                data_atendimento,
                observacao,
                psicologos_id
            },
            {
                where: {
                    id,
                },
            }
        );

        if (!pacientes_id || !data_atendimento || !observacao || !psicologos_id) {
            return res.status(400).json({ error: "Os parâmetros não foram enviados da forma correta" })
        }

        res.status(204).json("Atendimento atualizado com Sucesso");
    },
};


module.exports = atendimentoController;