const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
// const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/login", authController.postLogin);
router.get("/", homeController.getIndex)

module.exports = router;