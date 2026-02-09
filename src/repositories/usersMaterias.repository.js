const db = require("../config/database");

class UsersMateriasRepository {
    async enroll(userId, materiaId) {
        let status = "cursando"; // tem que ver se vai dar merda na hora do update !
        const [result] = await db.execute(
            `
            INSERT INTO users_materias (id_user, id_materia, status)
            VALUES(?, ?, ?)
            `,
            [userId, materiaId, status],
        );

        return result.insertId;
    }

    async findByUser(userId) {
        const [rows] = await db.execute(
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
            WHERE um.id_user = ?
            `,
            [userId],
        );

        return rows;
    }

    async updateGrades(userId, id_matricula, nota_1, nota_2) {
        const media = (Number(nota_1) + Number(nota_2)) / 2;
        let status = media >= 6 ? "aprovado" : "reprovado";

        const [result] = await db.execute(
            `
            UPDATE users_materias
            SET nota_1 = ?, nota_2 = ?, media = ?, status = ?
            WHERE id_matricula = ? AND id_user = ? 
            `,
            [nota_1, nota_2, media, status, id_matricula, userId],
        );

        return result.affectedRows > 0;
    }
}

module.exports = new UsersMateriasRepository();
