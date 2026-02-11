// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const app = express();

// Garante que o Front se Comunique com o back na mesma porta.
app.use(cors());

// app.use(cors({ origin: "https:meufront =)" }));

// Inicializa os middlewares
app.use(express.json());

// Inicia a rota /api com as rotas indicadas no routes/index.js
app.use("/api", routes);

module.exports = app;
