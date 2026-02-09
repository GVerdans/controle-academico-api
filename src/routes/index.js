const express = require("express");
const router = express.Router();

const materiasRoutes = require("./materias.routes");
const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const usersMateriasRoutes = require("./usersMaterias.routes");

const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", (req, res) => {
    res.json({ status: "ON" });
});

router.use("/materias", authMiddleware, materiasRoutes);
router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/users-materias", usersMateriasRoutes);

module.exports = router;
