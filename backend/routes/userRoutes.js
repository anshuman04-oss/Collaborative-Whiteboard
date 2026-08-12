const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { authRateLimiter } = require("../middlewares/rateLimitMiddleware");

const router = express.Router();

router.use(authRateLimiter);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getUser);


module.exports = router;
