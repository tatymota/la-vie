const {Pacientes} = require ("../models/pacientes")
 const pacienteController = {
    listarPaciente: async (req, res) => {
        const listarPaciente = await Pacientes.findAll();

        res.json(listarPaciente);
    },

    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body
        
        const novoPaciente = await Pacientes.create({
            nome, 
            email, 
            idade,
        })

        res.json(novoPaciente);
    },

    async deletarPaciente(req, res) {
        const { id } = req.params;

        await Pacientes.destroy({
            where:{
                id,
            },
        });

        res.json("Paciente deletado");
    },
    async atualizarPaciente(req, res){
        const { id } = req.params;
        const { nome, email, idade} = req.body;
        const pacienteAtualizado = await Pacientes.update(
            { 
            nome,
            email,
          idade
        },
        {
            where:{
            id,
        },
    }
     );
     res.json("Paciente atualizado com Sucesso")
    }
};

module.exports = pacienteController;