const usersMateriasRepository = require("../repositories/usersMaterias.repository");
const UsersMateriasRepository = require("../repositories/usersMaterias.repository");

class UsersMateriasController {
    async enroll(req, res) {
        try {
            const userId = req.user.id;
            const { id_materia } = req.body;

            if (!id_materia) {
                return res.json({
                    error: "id_materia is required !",
                });
            }

            const userEnroll = await UsersMateriasRepository.enroll(
                userId,
                id_materia,
            );

            return res.status(201).json({
                success: "User Enrolled Successfull !",
                userEnroll,
            });
        } catch (err) {
            res.status(400).json({
                error: err.message,
            });
        }
    }

    async findMyMaterias(req, res) {
        const userId = req.user.id;

        if (!userId) {
            return res.status(201).json({
                error: "User not found !",
            });
        }

        const materias = await UsersMateriasRepository.findByUser(userId);

        return res.json(materias);
    }

    async updateMateria(req, res) {
        try {
            const userId = req.user.id;
            const idMatricula = req.params.id_matricula;
            const { nota_1, nota_2 } = req.body;

            if (!userId) {
                return res.status(200).json({
                    error: "Missing ID",
                });
            }

            if (nota_1 == null || nota_2 == null) {
                res.status(200).json({
                    error: "nota_1 and nota_2 are required !",
                });
            }

            const updateMateria = await usersMateriasRepository.updateGrades(
                userId,
                idMatricula,
                nota_1,
                nota_2,
            );

            if (!updateMateria) {
                res.status(400).json({
                    error: "Materia not found. Please verify if you are enrolled in this materia !",
                });
            }

            return res.json({
                message: "Updated Successfully",
            });
        } catch (err) {
            res.status(400).json({
                error: [err.message],
            });
        }
    }
}

module.exports = new UsersMateriasController();
