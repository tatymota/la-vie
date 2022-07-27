const {Atendimento} = require ("../models")
const atendimentoController = {

    listarAtendimentos: async (req, res) => {
        const listarAtendimentos = await Atendimento.findAll();

        res.json(listarAtendimentos)
    },

    async listarAtendimentoId (req, res) {
        const { id } = req.params;
        const atendimento = await Atendimento.findByPk(id);
        if (atendimento === null) {
            res.json("Id não encontrado!");
        } else {
           res.json(atendimento);
        }
    },

async cadastrarAtendimentos(req, res) {
    const { pacientes_id,data_atendimento, observacao, psicologos_id} = req.body
    
    const novoAtendimento = await Atendimento.create({
        pacientes_id,
        data_atendimento,
        observacao,
        psicologos_id
    })

    res.json(novoAtendimento);
},
 async deletarAtendimentos(req, res){
    const { id } = req.params;
    await Atendimento.destroy ({
        where:{
            id,
        },
    });

    res.json ("Atendimento deletado com sucesso!");
 },
async atualizarAtendimentos (req, res){
    const { id } = req.params;
    const { pacientes_id,data_atendimento, observacao, psicologos_id } = req.body;
    const atendimentoAtualizado = await Atendimento.update(
        { 
            pacientes_id,
            data_atendimento,
            observacao,
            psicologos_id

    },
    {
        where:{
        id,
    },
}
 );
 res.json("Atendimento atualizado com Sucesso")
}
}


module.exports = atendimentoController;