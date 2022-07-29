const { Atendimento, Psicologos } = require("../models")
const atendimentoController = {

    listarAtendimentos: async (req, res) => {
        try {
            const listarAtendimentos = await Atendimento.findAll();
            res.status(200).json(listarAtendimentos);
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async listarAtendimentoId(req, res) {
        const { id } = req.params;
        const atendimento = await Atendimento.findByPk(id);
        if (atendimento === null) {
            res.status(404).json("Id não encontrado!");
        } else {
            res.status(200).json(atendimento);
        }
    },

    async cadastrarAtendimentos(req, res) {
        const { pacientes_id, data_atendimento, observacao, psicologos_id} = req.body

        const tokenPsicologo = req.auth.id;


        if (!pacientes_id || !data_atendimento || !observacao ) {

            return res.status(400).json("Erro na requisição");

        } else {
            const novoAtendimento = await Atendimento.create({
                pacientes_id,
                data_atendimento,
                observacao,
                psicologos_id: tokenPsicologo
            });

            res.status(201).json(novoAtendimento);
        }
    },

    async deletarAtendimentos(req, res) {
        const atendimento = await Atendimentos.findByPk(id);

        if (atendimento === null) {

            return res.status(400).json("Erro");

        } else {
            await Atendimentos.destroy({
                where: {
                    id,
                },
            }
            );
        };

        res.status(200).json("Atendimento deletado com sucesso!");

    },

    async atualizarAtendimentos(req, res) {
        const { id } = req.params;
        const { pacientes_id, data_atendimento, observacao, psicologos_id } = req.body;

        if (!pacientes_id || !data_atendimento || !observacao || !psicologos_id) {

            return res.status(400).json({ error: "Os parâmetros não foram enviados da forma correta" })
        } else {
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
        )};

        res.status(204).json("Atendimento atualizado com Sucesso");
    },
};


module.exports = atendimentoController;