const { Psicologos } = require("../models");
const { QueryTypes } = require('sequelize');
const db = require("../database");
const bcrypt = require("bcryptjs");
const psicologoController = {
    listarPsicologos: async (req, res) => {
        try {
            const listarPsicologos = await Psicologos.findAll();

            res.status(200).json(listarPsicologos);
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    
    async listarPsicologosId(req, res) {
        const { id } = req.params;
        const psicologo = await Psicologos.findByPk(id);
                
        if (psicologo === null) {
            res.status(404).json("Id não encontrado!");
        } else {
            res.status(200).json(psicologo);
        }
    },

    async cadastrarPsicologos(req, res) {
        const { nome, email, senha, apresentacao } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        if (!nome || !email || !senha || !apresentacao) {

            return res.status(400).json("Erro na requisição");
        } else {
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha: newSenha,
                apresentacao
            });

            res.status(201).json(novoPsicologo);
        }
    },

    async deletarPsicologos(req, res) {
        const { id } = req.params;
        const psicologo = await Psicologos.findByPk(id);

        if (psicologo === null) {

            return res.status(400).json("Erro");
        } else { 
        await Psicologos.destroy({
            where: {
                id,
            },
        });
    };

        res.status(200).json("Psicologo deletado com sucesso!");
    },

    async atualizarPsicologos(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        if (!nome || !email || !senha || !apresentacao) {
            return res.status(400).json("Error");
        } else {
        const psicologoAtualizado = await Psicologos.update(
            {
                nome,
                email,
                senha,
                apresentacao,
            },
            {
                where: {
                    id,
                },
            }
        );
       return res.status(204).json(psicologoAtualizado.body);
        };

        
    },
};

module.exports = psicologoController;