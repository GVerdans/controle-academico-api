const MateriasRepository = require("../repositories/materias.repository");

class MateriasController {
    async list(req, res) {
        try {
            const materias = await MateriasRepository.findAll();

            return res.json(materias);
        } catch (e) {
            res.json({ error: "Failed to list data !" });
        }
    }

    async create(req, res) {}

    // async update(res, res) {}

    // async delete(res, res) {}
}

module.exports = new MateriasController();
