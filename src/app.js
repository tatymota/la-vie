const express = require("express");
const routes = require("./routes");

const app = express();

// essa função precisa está antes das rotas, para conseguir rodar
app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));