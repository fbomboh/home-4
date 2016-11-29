// JavaScript Document
var http = require('http'),
	fs = require('fs');
	
var server = http.create(function(req, res){
	fs.readFile('public/home-4.html', function(err, html) {
		if(err) throw err;
		else {
			res.writeHeader(200, {"Content-Type": "text/html"});
			res.write(html);
			res.end();
		} 
	});
});

server.listen(1337);