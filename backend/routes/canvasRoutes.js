const express = require("express");
const { createCanvas, updateCanvas, loadCanvas, shareCanvas, unshareCanvas, deleteCanvas, getUserCanvases} = require("../controllers/canvasController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { rateLimiterMiddleware } = require("../middlewares/rateLimitMiddleware");

const router = express.Router();

router.use(authMiddleware, rateLimiterMiddleware);

router.post("/create", createCanvas); 
router.put("/update", updateCanvas); 
router.get("/load/:id", loadCanvas); 
router.put("/share/:id", shareCanvas); 
router.put("/unshare/:id", unshareCanvas);
router.delete("/delete/:id", deleteCanvas); 
router.get("/list", getUserCanvases);

module.exports = router;