var fs = require("fs");

function sendHtmlFile(response) {
	console.log("Manipulador de petición 'html' ha sido llamado.");
	fs.readFile("./index.html", function(err, data) {
		if(err) {
			response.writeHead(404, {'Content-Type': 'text/html'});
	  		response.end("404 Not Found");
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(data);
			response.end();
		}
	});
	//response.writeHead(200, {"Content-Type": "text/html"});
	//response.write("Funcion html ejecutada.");
	//response.end();
}

function sendJsFile(response) {
	console.log("Manipulador de petición 'js' ha sido llamado.");
	fs.readFile("./script.js", function(err, data) {
		if(err) {
			response.writeHead(404, {'Content-Type': 'text/html'});
	  		response.end("404 Not Found");
		} else {
			response.writeHead(200, {"Content-Type": "application/javascript"});
			response.write(data);
			response.end();
		}
	});

	//response.writeHead(200, {"Content-Type": "application/javascript"});
	//response.write("Funcion js ejecutada.");
	//response.end();
}

function sendCssFile(response) {
	console.log("Manipulador de petición 'css' ha sido llamado.");

	fs.readFile("./estilos.css", function(err, data) {
		if(err) {
			response.writeHead(404, {'Content-Type': 'text/html'});
	  		response.end("404 Not Found");
		} else {
			response.writeHead(200, {"Content-Type": "text/css"});
			response.write(data);
			response.end();
		}
	});
	//response.writeHead(200, {"Content-Type": "text/css"});
	//response.write("Funcion css ejecutada.");
	//response.end();
}


exports.sendHtml = sendHtmlFile;
exports.sendJs = sendJsFile;
exports.sendCss = sendCssFile;
