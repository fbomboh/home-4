// JavaScript Document



var express = require('express');
var app = express();
var http = require('http').Server(app);

//app.get('/', function(req, res) {
//    res.send();
// });


app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.use('/img', express.static(__dirname + '/img'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/home-4.html');
});

http.listen(1337, function(){
        console.log('listening on *:1337');
});
