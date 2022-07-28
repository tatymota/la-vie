const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs")

const AuthController = {

    async login(req, res){
        const { email, senha } = req.body

        const psicologo = await Psicologos.findOne({
            where: {
                email,
            },
        }); 

        if (!psicologo) {
            return res.status(400).json("Email não cadastrado!");
        }
        if (bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(401).json("Senha invalida!");
        };


        return res.json("Logado")

    },
};

module.exports = AuthController;