var server = require("./node_js/server.js"); // no es necesario la extension .js
var router = require("./node_js/router.js"); // si es necesario ./xxx
var requestHandlers = require("./node_js/requestHandlers.js");

const mongoClient = require("mongodb").MongoClient;
const assert = require('assert');

//const dbName = "firstdb";
const url = "mongodb://localhost:27017/firstdb";

var handle = {} //objeto vacio
handle["/"] = requestHandlers.sendHtml;
handle["/index.html"] = requestHandlers.sendHtml;
handle["/estilos.css"] = requestHandlers.sendCss;
handle["/script.js"] = requestHandlers.sendJs;
handle["/saveData"] = requestHandlers.save;

server.init(router.route, handle);


mongoClient.connect(url, function(err, db){
	//if(err) throw err;
	assert.equal(null, err);
	console.log("Database created");
	db.close();
});