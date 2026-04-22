const db = require("../config/database");

class MateriasRepository {
    // Method \/
    async findAll() {
        const [rows] = await db.query(`
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
        const [rows] = await db.query(
            `
            SELECT 
            m.id_materia,
            m.nome,
            p.nome AS periodo
            FROM materias m JOIN periodo p ON p.id_periodo = m.id_periodo
            WHERE m.id_materia = $1
            LIMIT 1
            `,
            [id],
        );
        return rows[0] || null;
    }

    // Another one \/
    async create(data) {
        const { id_periodo, nome } = data;

        const [result] = await db.query(
            `
            INSERT INTO materias (
            id_periodo, 
            nome) 
            VALUES ($1, $2)
            RETURNING id_materia
            `,
            [id_periodo, nome],
        );

        return {
            id_materia: result[0].id_materia,
            ...data,
        };
    }

    // Another one \/
    async update(id, data) {
        const nome = data.nome ?? null;
        const id_periodo = data.id_periodo ?? null;

        const [result] = await db.query(
            `
            UPDATE materias SET
            nome = COALESCE($1, nome),
            id_periodo = COALESCE($2, id_periodo),
            updated_at = NOW()
            WHERE id_materia = $3
            `,
            [nome, id_periodo, id],
        );

        return result.rowCount > 0;
    }

    async delete(id) {
        const [result] = await db.query(
            `
            DELETE FROM materias WHERE id_materia = $1
            `,
            [id],
        );

        return result.rowCount > 0;
    }
}
