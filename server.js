var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();

var api = require('./routes/api');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'dist')));

app.use('/',api);

app.get("/", (req,res) => {
    res.sendFile(path.json(__dirname,'dist/index.html'))
});
/*
    Get port from environment and store in express
*/ 
var port = process.env.PORT || '3000';
app.set('port',port);

/* 
    Create HTTP server 
*/
var server = http.createServer(app);

//Listen on provided PORT
server.listen(port, () => console.log("Server is running"));