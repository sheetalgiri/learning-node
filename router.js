function route(handle,pathname,response,request){
	console.log("about to route request for path "+pathname);
	if(typeof handle[pathname]==='function')
		return handle[pathname](response,request);
	else{
		console.log("404 handler not found");
		response.writeHead(200,{'content-type':'text/plain'});
		response.write("404 not found");
		response.end();
	}
}

exports.route=route;