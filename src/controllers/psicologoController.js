const {Psicologos} = require("../models");
const { QueryTypes } = require('sequelize');
const db = require("../database");
const bcrypt = require("bcryptjs");
const psicologoController = {
    listarPsicologos: async (req, res) => {
        const listarPsicologos = await Psicologos.findAll();

        res.json(listarPsicologos)
    },
    async listarPsicologosId (req, res) {
        const { id } = req.params;
        const psicologo = await db.query("SELECT id, nome, email, apresentacao, updatedAt, createdAt FROM `psicologos` WHERE id = ?", 
        { 
            replacements: [id],
            type: QueryTypes.SELECT 
        });
        if (psicologo === null) {
            res.json("Id não encontrado!");
        } else {
           res.json(psicologo);
        }
    },

    
async cadastrarPsicologos(req, res) {
    const { nome, email, senha, apresentacao } = req.body

    const newSenha = bcrypt.hashSync(senha, 10);
    
    const novoPsicologo = await Psicologos.create({
        nome, 
        email, 
        senha: newSenha,
        apresentacao,
    })

    return res.status(201).json(novoPsicologo);
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