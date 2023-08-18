const server = require('express')
const app = server();

const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json())

const roteador = require("../rotas/rotaproduto.js");
app.use("/api/produto",roteador);

app.listen(3000,()=>{"Olá Mundo"})