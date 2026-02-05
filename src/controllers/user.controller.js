const userRepository = require("../repositories/users.repository");
const bcrypt = require("bcrypt");

class AuthController {
    async list(req, res) {
        try {
            const allUsers = await userRepository.findAll();

            return res.json(allUsers);
        } catch (e) {
            return res.status(400).json({
                error: "Error to list all Users",
                message: e.message,
            });
        }
    }

    async createUser(req, res) {
        try {
            const { name, username, password } = req.body;

            if (!name || !username || !password) {
                return res.status(400).json({
                    error: "Cannot create User !",
                    message: e.message,
                });
            }

            const salt = 10;
            const passwordHash = await bcrypt.hash(password, salt);

            const newUser = await userRepository.createUser({
                name,
                username,
                password: passwordHash,
            });

            return res.json({
                message: "User created",
                data: {
                    name: newUser.name,
                    username: newUser.username,
                },
            });
        } catch (e) {
            return res.status(400).json({
                error: "Cannot create User !",
                message: e.message,
            });
        }
    }
}

module.exports = new AuthController();
