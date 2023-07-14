const { validationResult } = require("express-validator");
const { User } = require("../database/models");
const bcryptjs = require("bcryptjs");

module.exports = {
  home: async (req, res) => {   
    res.render("home")
  },
  register: async (req, res) => {  
    res.render("register")
  },
  processRegister: async (req, res) => {
    console.log("body = ", req.body)
    const resultValidation = validationResult(req);    
    if (resultValidation.errors.length > 0) {
      console.log(resultValidation.errors);
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }  
    const userInDb = await User.findOne({
      where: {
        email: req.body.email,
      },
    });  
    if (userInDb) {
      return res.render("register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }
  
    await User.create({
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
    }).then(function () {
      res.redirect("/");
    });
  },
  
};
