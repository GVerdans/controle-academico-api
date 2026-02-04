const express = require("express");
const router = express.Router();

const materiasRoutes = require("./materias.routes");
const usersRoutes = require("./users.routes");

router.get("/", (req, res) => {
    res.json({ status: "ON" });
});

router.use("/materias", materiasRoutes);
router.use("/users", usersRoutes);

module.exports = router;
