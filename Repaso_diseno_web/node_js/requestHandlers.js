var fs = require("fs");
var querystring = require("querystring");


function sendHtmlFile(response, postData="") {
	//console.log("Manipulador de petición 'html' ha sido llamado.");
	fs.readFile("src/index.html", function(err, data) {
		if(err) {
			response.writeHead(404, {'Content-Type': 'text/html'});
	  		response.end("404 Not Found");
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(data);
			response.end();
		}
	});
}

function sendJsFile(response, postData="") {
	fs.readFile("src/script.js", function(err, data) {
		if(err) {
			response.writeHead(404, {'Content-Type': 'text/html'});
	  		response.end("404 Not Found");
		} else {
			response.writeHead(200, {"Content-Type": "application/javascript"});
			response.write(data);
			response.end();
		}
	});
}

function sendCssFile(response, postData="") {
	fs.readFile("src/estilos.css", function(err, data) {
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

function saveDataInDB(response, postData) {
	var dataObj = querystring.parse(postData);
	var dataJSON = JSON.stringify(dataObj); // Convierto a formato JSON
	console.log("Datos del formulario: " + dataJSON);
  	//response.writeHead(200, {"Content-Type": "text/html"});
  	//response.write("Tu enviaste: " + postData);
  	//response.end();
  	sendHtmlFile(response, postData); // Recarga la pagina principal
}

exports.sendHtml = sendHtmlFile;
exports.sendJs = sendJsFile;
exports.sendCss = sendCssFile;
exports.save = saveDataInDB;
