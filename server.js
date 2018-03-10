var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static(__dirname + '/static'));


app.set("view engine", "jade");


app.get('/dashboard/barcodes/', function (req, res) {
    res.sendfile("./templates/dashboard-products.html");
});


var server = app.listen(8000, '0.0.0.0', function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});
