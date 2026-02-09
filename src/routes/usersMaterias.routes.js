const express = require("express");
const router = express.Router();

const usersMateriasController = require("../controllers/usersMaterias.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/enroll", authMiddleware, usersMateriasController.enroll); // Matricula em uma materia
router.get("/", authMiddleware, usersMateriasController.findMyMaterias); // Find my materias
router.put(
    "/:id_matricula",
    authMiddleware,
    usersMateriasController.updateMateria,
); // The name SAYS
module.exports = router;
