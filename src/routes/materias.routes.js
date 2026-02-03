const express = require("express");
const router = express.Router();

const MateriasController = require("../controllers/materias.controller");

router.get("/", MateriasController.list);
router.post("/", MateriasController.create);
router.put("/:id", MateriasController.update);
router.delete("/:id", MateriasController.delete);

module.exports = router;
