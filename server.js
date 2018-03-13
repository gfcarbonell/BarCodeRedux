var express = require("express");
var path = require("path");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var formidable = require("express-form-data");

var util = require("./utils.js");
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
    let data = JSON.parse(req.body.data);
    let oldPath = req.files.file.path;
    let newPath = __dirname +"/public/"+ data.code.name + "." + extension;

    fs.rename(oldPath, newPath, (err) => {
        if(err) console.log(err);
    });

    var json = [];
    var newData = {};
    var letters = [data.code.letter, data.name.letter, data.dependence.letter, data.headquarter.letter];
    var names = [data.code.name, data.name.name, data.dependence.name, data.headquarter.name];
    var abc = util.genCharArray("A", "Z");

    //Add Key Letter in Array -> json
    for (var i = 0; i < letters.length; i++) {
        json.push(util.addLetterKeyToJson(letters[i], names[i]));
    }

    //Convert in one Object
    for (var i = 0; i < json.length; i++) {
        for (var x in json[i]) {
            if (!newData[x]) {
                newData[x] = [];
            }
            newData[x] = json[i][x];
        }
    }

    const result = excelToJson({
        sourceFile: newPath,
        sheets: [data.sheet],
        header:{
            rows: 1
        },
        columnToKey: newData
    });

    console.log(result);


    res.redirect("/dashboard/barcodes");
});

var server = app.listen(8000, '0.0.0.0', function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});
