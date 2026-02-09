const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, UserController.list); // List all users
router.post("/", UserController.createUser); // Create an User
// router.put("/:id", authController.update); // update User
// router.delete("/:id", authController.delete); // The name say

module.exports = router;
