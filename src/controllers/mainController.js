const { User } = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

module.exports = {
  home: async (req, res) => {   
    res.render("home")
  },
  register: async (req, res) => {  
    res.render("register")
  },
  processRegister: async (req, res) => {
    console.log("body = ", req.body);
    const resultValidation = validationResult(req);
    console.log("resultValidation: ", resultValidation);
    console.log("resultValidation.errors = ", resultValidation.errors);
    
    if (resultValidation.errors.length > 0) {
      console.log("Validation errors detected");
      console.log("errors = ", resultValidation.mapped());
      
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
    
    console.log("userInDb = ", userInDb);
  
    if (userInDb) {
      console.log("User already exists in the database");
      
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
