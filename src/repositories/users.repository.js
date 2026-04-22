const db = require("../config/database");

class userRepository {
    async findAll() {
        const result = await db.query(`
        SELECT 
      u.id_user,
      u.name,
      u.username,
      u.password
    FROM users u
  `);

        return result.rows;
    }

    async createUser(data) {
        const { name, username, password } = data;

        const result = await db.query(
            `
    INSERT INTO users (name, username, password)
    VALUES ($1, $2, $3)
    RETURNING id_user
    `,
            [name, username, password],
        );

        return {
            id_user: result.rows[0].id_user,
            name,
            username,
        };
    }

    async findByUsername(username) {
        const result = await db.query(
            `
    SELECT * FROM users WHERE username = $1 LIMIT 1
    `,
            [username],
        );

        return result.rows[0] || null;
    }
}

module.exports = new userRepository();
