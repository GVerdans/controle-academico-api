const db = require("../config/database");

class MateriasRepository {
    // Method \/
    async findAll() {
        const [rows] = await db.execute(`
            SELECT
                m.id_materia,
                m.nome,
                p.nome AS periodo,
                m.nota_1,
                m.nota_2,
                m.media,
                m.status
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
            p.nome AS periodo,
            m.nota_1,
            m.nota_2,
            m.media,
            m.status
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
        const { id_periodo, nome, nota_1, nota_2, media, status } = data;

        const [result] = await db.execute(
            `
            INSERT INTO materias (
            id_periodo, 
            nome, 
            nota_1, 
            nota_2, 
            media, 
            status) 
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [id_periodo, nome, nota_1, nota_2, media, status],
        );

        return {
            id_materia: result.insertId,
            ...data,
        };
    }

    // Another one \/
    async update(id, data) {
        const nome = data.nome ?? null;
        const nota_1 = data.nota_1 ?? null;
        const nota_2 = data.nota_2 ?? null;
        const status = data.status ?? null;

        let media = null;

        if (nota_1 !== null && nota_2 !== null) {
            media = (Number(nota_1) + Number(nota_2)) / 2;
        }

        const [result] = await db.execute(
            `
            UPDATE materias SET
            nome = COALESCE(?, nome),
            nota_1 = COALESCE(?, nota_1),
            nota_2 = COALESCE(?, nota_2),
            media = COALESCE(?, media),
            status = COALESCE(?, status),
            updated_at = NOW()
            WHERE id_materia = ?
            `,
            [nome, nota_1, nota_2, media, status, id],
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
