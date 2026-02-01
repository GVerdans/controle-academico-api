const express = require("express");
const router = express.Router();

const materiasRoutes = require("./materias.routes");

router.get("/", (req, res) => {
    res.json({ status: "ON" });
});

router.use("/materias", materiasRoutes);

module.exports = router;
