function route(handle, pathname, response) {
	console.log("A punto de rutear una peticion para " + pathname);

	if(typeof handle[pathname] === "function") {
		handle[pathname](response);
	}
	else {
		console.log("404, " + pathname + " Not Found");
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404, " + pathname + " Not Found");
		response.end();
	}
	
}

exports.route = route;