var express = require("express");
var path = require("path");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var formidable = require("express-form-data");
const excelToJson = require('convert-excel-to-json');

app.use("/static", express.static(__dirname + "/static"));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(formidable.parse({keepExtensions:true}));

app.set("view engine", "jade");

app.get("/dashboard/barcodes/", function (req, res) {
    res.render("dashboard-products");
});

app.post("/dashboard/barcodes/import", function (req, res) {
    let extension = req.files.file.name.split(".").pop();
    let data = {
      "code": req.body.code,
      "name": req.body.name,
      "dependence": req.body.dependence,
      "headquarter": req.body.headquarter
    }

    let oldPath = req.files.file.path;
    let newPath = __dirname +"/public/"+ data.code + "." + extension;

    fs.rename(oldPath, newPath, function(err){
        if(err) console.log(err);
    });

    const result = excelToJson({
        sourceFile: newPath
    });

    console.log(result);
    res.redirect("/dashboard/barcodes");
});


var server = app.listen(8000, '0.0.0.0', function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});
