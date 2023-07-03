const { Router } = require("express");
const router = Router();
module.exports = router;

const mainController = require("../controllers/mainController");
const multerMiddleware = require("../middlewares/multerMiddleware.js");


router.get("/", mainController.home);
router.get("/register", mainController.register);
router.post("/register", multerMiddleware.single("image"), mainController.processRegister)

