const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/users.repository");
require("dotenv").config();

class AuthController {
    async login(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({
                    error: "Invalid Credentials !",
                });
            }

            // Verify if user exists !
            const user = await userRepository.findByUsername(username);
            if (!user) {
                return res.status(400).json({
                    error: "Invalid Username !",
                });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({
                    error: "Invalid password !",
                });
            }

            const token = jwt.sign(
                {
                    id: user.id_user,
                    username: user.username,
                },
                process.env.JWT_SECRET,
                { expiresIn: "1h" },
            );

            return res.json({
                message: "Login Successful !",
                token,
            });
        } catch (err) {
            res.status(400).json({
                error: "Invalid credentials !",
                message: err.message, // remover depois
            });
        }
    }
}

module.exports = new AuthController();
