 var files = require("fs");
 console.log("Open file");
 files.open('read.txt', 'r+', function(err,fd){
 	if(err){
 		return console.error(err);
 	}
 	console.log ("Opened file");

 })