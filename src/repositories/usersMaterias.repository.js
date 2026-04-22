const db = require("../config/database");

class UsersMateriasRepository {
    async enroll(userId, materiaId) {
        let status = "cursando";
        const [result] = await db.query(
            `
            INSERT INTO users_materias (id_user, id_materia, status)
            VALUES($1, $2, $3)
            RETURNING id_matricula
            `,
            [userId, materiaId, status],
        );

        return result[0].id_matricula;
    }

    async findByUser(userId) {
        const [rows] = await db.query(
            `
            SELECT 
                um.id_matricula,
                m.id_materia,
                m.nome,
                um.nota_1,
                um.nota_2,
                um.media,
                um.status
            FROM users_materias um
            JOIN materias m ON m.id_materia = um.id_materia
            WHERE um.id_user = $1
            `,
            [userId],
        );

        return rows;
    }

    async updateGrades(userId, id_matricula, nota_1, nota_2) {
        const media = (Number(nota_1) + Number(nota_2)) / 2;
        let status = media >= 6 ? "aprovado" : "reprovado";

        const [result] = await db.query(
            `
            UPDATE users_materias
            SET nota_1 = $1, nota_2 = $2, media = $3, status = $4
            WHERE id_matricula = $5 AND id_user = $6
            `,
            [nota_1, nota_2, media, status, id_matricula, userId],
        );

        return result.rowCount > 0;
    }
}

module.exports = new UsersMateriasRepository();
