require("dotenv").config();

const express = require("express");
const routes = require("./src/routes");
const app = express();

// Inicializa os middlewares
app.use(express.json());

// Inicia a rota /api com as rotas indicadas no routes/index.js
app.use("/api", routes);

module.exports = app;
