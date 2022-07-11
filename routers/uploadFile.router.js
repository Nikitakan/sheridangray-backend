const express = require('express');
const router = express.Router();
const {uploadImage}=require('../controller/uploadFiles.controller')
const multer  = require('multer')
const {sendResponse}=require("../helpers/requestHandler.helper")
// const upload = multer({ dest: 'uploads/' })
// const upload = multer({
//     dest: 'uploads/' ,
//     limits: {
//       fileSize: 1000000 // 1000000 Bytes = 1 MB
//     },
    
//     fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(png|jpg)$/)) { 
//          // upload only png and jpg format
//          return cb(new Error('Please upload a Image'))
//        }
       
//      cb(undefined, true)
     
//   }
// })

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, 'uploads');
  },
  filename: function (req, file, callback) {
      callback(null, new Date().getTime()+"-"+file.originalname);
  }
});

var upload = multer({ storage: storage })

router.post('/image',upload.single('image'), uploadImage);

module.exports = router;
