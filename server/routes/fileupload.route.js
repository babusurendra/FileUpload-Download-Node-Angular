const controller = require('../controllers/fileupload.controller');
const express = require('express');
const  router = express.Router();
router.post('/',controller.uploadfile); 
router.get('/:id',(req,res)=>{
    console.log("request received to download");
});//controller.download
module.exports = router;