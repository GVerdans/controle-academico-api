const express = require("express");
const router = express.Router();

const MateriasController = require("../controllers/materias.controller");

router.get("/", MateriasController.list);
// router.post("/", materiasController.create);
// router.put("/:id", materiasController.update);
// router.delete("/:id", materiasController.remove);

module.exports = router;
