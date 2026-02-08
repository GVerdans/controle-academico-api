const MateriasRepository = require("../repositories/materias.repository");

class MateriasController {
    // Method to list all materias
    async list(req, res) {
        try {
            const materias = await MateriasRepository.findAll();

            return res.json(materias);
        } catch (e) {
            res.json({ error: "Failed to list data !" });
        }
    }

    // Method to create ONE materia
    async create(req, res) {
        try {
            const { id_periodo, nome } = req.body;

            if (!id_periodo || !nome) {
                return res.status(400).json({
                    error: "Please insert id_periodo and nome !",
                });
            }

            const newMateria = await MateriasRepository.create({
                id_periodo,
                nome,
            });

            return res
                .status(201)
                .json({ success: "Materia created !", data: newMateria });
        } catch (e) {
            return res.json({
                error: "Failed to create Materia !",
                details: e.message,
            });
        }
    }

    // method to update a materia
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;

            if (!id) {
                return res.status(400).json({
                    error: "Please insert ID of the Materia !",
                });
            }

            const updatedMateria = await MateriasRepository.update(id, data);
            if (!updatedMateria) {
                return res.status(400).json({
                    error: `Materia not found or not updated !`,
                });
            }

            return res.json({
                message: "Materia updated sucessfully !",
            });
        } catch (e) {
            res.json({
                error: "Failed to update !",
                message: e.message,
            });
        }
    }

    // method to delete materia
    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.json({
                    error: "Please insert id !",
                });
            }

            const deleted = await MateriasRepository.delete(id);

            return res.json({
                message: `Materia ID: ${id}, success deleted !`,
                deleted,
            });
        } catch (e) {
            return res.json({
                error: "Error to delete materia !",
                details: e,
            });
        }
    }
}

module.exports = new MateriasController();
