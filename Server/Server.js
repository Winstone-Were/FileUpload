const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dir = `/tmp/myuploads/`; 
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // added Date.now() so that name will be unique
    }
});
const uploadFiles = multer({ storage: storage });
app.post("/fileupload", uploadFiles.single("file"), (req, res, next) => {
    const file = req.file;

    if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }

    console.log(file);

    res.json({
        success: true,
        statusCode: 200,
        fileName: file.filename
    });

    fs.open(file.path,'r',(err,f)=>{
        console.log(f);
    })

    fs.readFile(file.path, 'utf8', (err, data)=>{
        console.log(data);  
    })
});


app.listen(3001,()=>{
    console.log('App Listening on 3001')
})