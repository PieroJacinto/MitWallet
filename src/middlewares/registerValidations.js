const path = require("path");
const { body, validationResult } = require("express-validator");
const { User } = require("../database/models");
module.exports = {
  userValidations: [
    body("name")
      .notEmpty()
      .withMessage("Debes completar tu nombre")
      .bail()
      .isLength({ min: 2 })
      .withMessage("El nombre debe tener al menos dos caracteres"),
    body("lastName")
      .notEmpty()
      .withMessage("Debes completar tu apellido")
      .bail()
      .isLength({ min: 2 })
      .withMessage("El apellido debe tener al menos dos caracteres"),
    body("email")
      .notEmpty()
      .withMessage("Debes completar tu email")
      .isEmail()
      .withMessage("Debes escribir un formato de correo válido")
      .custom(async (value, { req }) => {
        const userToRegister = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (userToRegister) {
          throw new Error("El e-mail ingresado ya está registrado");
        }
      }),
    body("password")
      .notEmpty()
      .withMessage("Debes introducir una contraseña")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener al menos ocho caracteres"),
    body("phone")
      .notEmpty()
      .withMessage("Debes completar tu número de teléfono")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Debes introducir un número telefónico válido"),
    body("avatar").custom((value, { req }) => {
      const file = req.file;
      const acceptedExtensions = [".gif", ".png", ".tif", ".jpg", ".jpeg"];
      if (!file) {
        throw new Error("Debes subir una imagen de perfil zi");
      } else {
        const fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(
            `Las extensiones de archivo permitidas son: ${acceptedExtensions.join(
              ", "
            )}`
          );
        }
      }
      return true;
    }),
  ],  
};
