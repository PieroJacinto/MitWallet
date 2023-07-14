const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");

// multer conf
const multer = require("multer");
const storage = require("../middlewares/multerMiddleware");
const upload = multer({ storage });

// validations with express-validator
const registerMiddlewares = require("../middlewares/registerValidations");
const userValidations = registerMiddlewares.userValidations;

router.get("/", mainController.home);
router.get("/register", mainController.register);
router.post(
    "/register",
    userValidations, // Middlewares de validación deben ir primero
    upload.single("avatar"), // Luego el middleware de carga de archivos
    mainController.processRegister
  );

module.exports = router;

    