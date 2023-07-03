const bcrypt = require('bcryptjs');

const { User } = require("../database/models");

module.exports = {
  home: async (req, res) => {    
    

    res.render("home")
  },

  register: async (req, res) => {    
    
    
    res.render("register")
  },

  processRegister: async (req, res) => {
    const fullname = await req.body.fullname
    const email = await req.body.email
    const password = await bcrypt.hash(req.body.password, 12)
    const profileImage = await req.body.file

    const UserToCreate = await User.create({
      fullname: fullname,
      email: email,
      password: password
    })

    res.render("login")
  }

};
