var express = require('express');
var path = require("path");
var fs = require("fs");

var multer = require("multer");
var upload = multer({ dest: 'uploads/' });

var app = express();

app.post('/upload', upload.single('file'), function (req, res) {
    fs.unlink(req.file.path);

    res.json({
        size: req.file.size
    })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App Started!');
});
