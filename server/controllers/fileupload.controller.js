const multer = require("multer");
var storage = multer.diskStorage({
  //multers disk storage settings
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(
      null,
      file.fieldname +
        "-" +
        datetimestamp +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  }
});
//var upload = multer({ dest: 'uploads/' })
var upload =multer({ dest:"./uploads/"}).single('file')

module.exports = {
  uploadfile: ((req, res) => {
      //console.log(req);
      //console.log("in upload file");
    upload(req, res, function(err) {
        //console.log("req obj is"+req)
        //console.log(req.file);
      if (err) {
        res.json({ error_code: 1, err_desc: err });
        return;
      }
      console.log("filename1 :"+req.file.filename);
     // console.log(`file path is ${req}`);
      res.json({ error_code: 0, err_desc: null });
    });
  }),
  download : ((req,res)=>{
        console.log("in dowload controller");
        path = __dirname('./uploads')
        // var filePath = "./uploads/"; // Or format the path using the `id` rest param
         var fileName = "5da249a4f4e774500579bdbb8b18f3fc"; // file name 
         res.download(path, fileName);  
  })
};
