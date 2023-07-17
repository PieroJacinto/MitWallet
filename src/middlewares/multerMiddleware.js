const path = require("path");
const multer = require("multer");
const storage= multer.diskStorage({
  destination: (req,file,cb) =>{      
      cb(null,path.join(__dirname,"../../public/images/avatar"));    
  },
  filename: (req,file,cb) => {
    const newFileName= "user-" + Date.now() + path.extname(file.originalname);
    cb(null,newFileName);      
  }
});   
module.exports= storage;