const db = require("../config/database");

class userRepository {
    async findAll() {
        const [rows] = await db.execute(
            `
            SELECT 
            u.id_user,
            u.name,
            u.username,
            u.password
             FROM users u
            `,
        );

        return rows;
    }

    async createUser(data) {
        const { name, username, password } = data;

        const [result] = await db.execute(
            `
            INSERT INTO users (name, username, password)
            VALUES (?, ?, ?)
            `,
            [name, username, password],
        );

        return {
            id_user: result.insertId,
            name,
            username,
        };
    }

    async findByUsername(username) {
        const [rows] = await db.execute(
            `
            SELECT * FROM users WHERE username = ? LIMIT 1
            `,
            [username],
        );
        return rows[0] || null;
    }
}

module.exports = new userRepository();
