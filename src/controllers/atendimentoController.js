const {Atendimento} = require ("../models")
const atendimentoController = {

    listarAtendimentos: async (req, res) => {
        const listarAtendimentos = await Atendimento.findAll();

        res.json(listarAtendimentos)
    },


async cadastrarAtendimentos(req, res) {
    const { data, observacao } = req.body
    
    const novoAtendimento = await Atendimento.create({
      data, observacao
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
    const { data, observacao } = req.body;
    const atendimentoAtualizado = await Atendimento.update(
        { 
       data,
       observacao
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