const express = require("express");
const router = express.Router();

const materiasRoutes = require("./materias.routes");
const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");

router.get("/", (req, res) => {
    res.json({ status: "ON" });
});

router.use("/materias", materiasRoutes);
router.use("/users", usersRoutes);
router.use("/auth", authRoutes);

module.exports = router;
