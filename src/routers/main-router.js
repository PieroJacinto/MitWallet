const { Router } = require("express");
const router = Router();
module.exports = router;

const mainController = require("../controllers/mainController");
const multerMiddleware = require("../middlewares/multerMiddleware");


router.get("/", mainController.home);


