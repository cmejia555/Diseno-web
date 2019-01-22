'use strict'

var server = require("./node_js/server.js"); // no es necesario la extension .js
var router = require("./node_js/router.js"); // si es necesario ./xxx
var requestHandlers = require("./node_js/requestHandlers.js");

// Seteo los handlers
var handle = {} //objeto vacio
handle["/"] = requestHandlers.sendHtml;
handle["/index.html"] = requestHandlers.sendHtml;
handle["/estilos.css"] = requestHandlers.sendCss;
handle["/script.js"] = requestHandlers.sendJs;
handle["/saveData"] = requestHandlers.save;

server.init(router.route, handle);


var db = require("./node_js/db.js");

db.init("firstdb");
