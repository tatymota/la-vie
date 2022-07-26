const express = require("express");
const routes = require("./routes/index");
const models = require("./models/index")
const db = require("./database/index");

const app = express();

db.hasConection(); 
db.sync();

// essa função precisa está antes das rotas, para conseguir rodar
app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));