var server = require("./server.js"); // no es necesario la extension .js
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");


var handle = {} //objeto vacio
handle["/"] = requestHandlers.sendHtml;
handle["/index.html"] = requestHandlers.sendHtml;
handle["/estilos.css"] = requestHandlers.sendCss;
handle["/script.js"] = requestHandlers.sendJs;

server.init(router.route, handle);