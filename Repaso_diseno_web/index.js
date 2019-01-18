var server = require("./node_modules/server.js"); // no es necesario la extension .js
var router = require("./node_modules/router.js"); // si es necesario ./xxx
var requestHandlers = require("./node_modules/requestHandlers.js");


var handle = {} //objeto vacio
handle["/"] = requestHandlers.sendHtml;
handle["/index.html"] = requestHandlers.sendHtml;
handle["/estilos.css"] = requestHandlers.sendCss;
handle["/script.js"] = requestHandlers.sendJs;
handle["/saveData"] = requestHandlers.save;

server.init(router.route, handle);