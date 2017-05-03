var http= require("http");
var server = http.createServer(function(req, res){
	res.writeHead(200,{"contact-type": "text/plain"});
	res.end("hello");

});
server.listen(8090);
console.log("server is running on port 8090");