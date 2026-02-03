const materiasRepository = require("../repositories/materias.repository");
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

    async create(req, res) {
        const { id_periodo, nome, nota_1, nota_2, media, status } = req.body;

        try {
            if (!id_periodo || !nome) {
                res.status(400).json({
                    error: "Please insert id_periodo and nome !",
                });
            }

            const newMateria = await MateriasRepository.create({
                id_periodo,
                nome,
                nota_1,
                nota_2,
                media,
                status,
            });

            return res
                .status(201)
                .json({ success: "Materia created !", newMateria });
        } catch (e) {
            return res.json({ error: "Failed to create Materia !", e });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;

            if (!id || !data) {
                return res.status(400).json({
                    error: "Please insert id or data !",
                });
            }

            const updatedMateria = await materiasRepository.update(id, data);
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
            });
        }
    }

    // async delete(res, res) {}
}

module.exports = new MateriasController();
