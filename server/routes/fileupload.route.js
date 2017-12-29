const controller = require('../controllers/fileupload.controller');
const express = require('express');
const  router = express.Router();
router.post('/',controller.uploadfile); 
router.get('/',controller.download);
router.get('/zip',controller.downloadzip);
module.exports = router;