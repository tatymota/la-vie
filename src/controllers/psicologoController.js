const {Psicologos} = require("../models");
const psicologoController = {
    listarPsicologos: async (req, res) => {
        const listarPsicologos = await Psicologos.findAll();

        res.json(listarPsicologos)
    },


async cadastrarPsicologos(req, res) {
    const { nome, email, senha, apresentacao } = req.body
    
    const novoPsicologo = await Psicologos.create({
        nome, 
        email, 
        senha,
        apresentacao
    })

    res.json(novoPsicologo);
},
 async deletarPsicologos(req, res){
    const { id } = req.params;
    await Psicologos.destroy ({
        where:{
            id,
        },
    });
    res.json ("Psicologo deletado com sucesso!");
 },
async atualizarPsicologos(req, res){
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    const psicologoAtualizado = await Psicologos.update(
        { 
        nome,
        email,
        senha,
        apresentacao,
    },
    {
        where:{
        id,
    },
}
 );
 res.json("Psicologo atualizado com Sucesso")
}
}

module.exports = psicologoController;