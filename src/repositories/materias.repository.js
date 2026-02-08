const db = require("../config/database");

class MateriasRepository {
    // Method \/
    async findAll() {
        const [rows] = await db.execute(`
            SELECT
                m.id_materia,
                m.nome,
                p.nome AS periodo
                FROM materias m
                JOIN periodo p ON p.id_periodo = m.id_periodo
                ORDER BY m.id_materia DESC
            `);
        return rows;
    }

    // Another one\/
    async findById(id) {
        const [rows] = await db.execute(
            `
            SELECT 
            m.id_materia,
            m.nome,
            p.nome AS periodo
            FROM materias m JOIN periodo p ON p.id_periodo = m.id_periodo
            WHERE m.id_materia = ?
            LIMIT 1
            `,
            [id],
        );
        return rows[0] || null;
    }

    // Another one \/
    async create(data) {
        const { id_periodo, nome } = data;

        const [result] = await db.execute(
            `
            INSERT INTO materias (
            id_periodo, 
            nome) 
            VALUES (?, ?)
            `,
            [id_periodo, nome],
        );

        return {
            id_materia: result.insertId,
            ...data,
        };
    }

    // Another one \/
    async update(id, data) {
        const nome = data.nome ?? null;
        const id_periodo = data.id_periodo ?? null;

        const [result] = await db.execute(
            `
            UPDATE materias SET
            nome = COALESCE(?, nome),
            id_periodo = COALESCE(?, id_periodo),
            updated_at = NOW()
            WHERE id_materia = ?
            `,
            [nome, id_periodo, id],
        );

        return result.affectedRows > 0;
    }

    async delete(id) {
        const [result] = await db.execute(
            `
            DELETE FROM materias WHERE id_materia = ?
            `,
            [id],
        );

        return result.affectedRows > 0;
    }
}

module.exports = new MateriasRepository();
