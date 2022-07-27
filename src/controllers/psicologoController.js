const { Psicologos } = require("../models");
const { QueryTypes } = require('sequelize');
const db = require("../database");
const bcrypt = require("bcryptjs");
const psicologoController = {
    listarPsicologos: async (req, res) => {
        const listarPsicologos = await Psicologos.findAll();

        res.status(200).json(listarPsicologos);
    },

    async listarPsicologosId(req, res) {
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

        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            apresentacao
        })

        res.status(201).json(novoPsicologo);
    },

    async deletarPsicologos(req, res) {
        const { id } = req.params;
        await Psicologos.destroy({
            where: {
                id,
            },
        });

        res.status(200).json("Psicologo deletado com sucesso!");
    },

    async atualizarPsicologos(req, res) {
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
                where: {
                    id,
                },
            }
        );

        if (!nome || !email || !senha || !apresentacao) {
            return res.status(400).json({ error: "Os parâmetros não foram enviados da forma correta" })
        }

        res.status(204).json(this.atualizarPsicologos);
    },
};

module.exports = psicologoController;