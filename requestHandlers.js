var querystring=require('querystring'),
			 fs=require('fs'),
	 formidable=require('formidable');

function start(response){
	console.log("request handler for start was called");
	body='<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" '+
		'method="post">'+
		'<input type="file" name="upload" multiple="multiple">'+
		'<input type="submit" value="Upload File" />'+
		'</form>'+'</body>'+
		'</html>';
	response.writeHead(200,{'content-type':'text/html'});
	response.write(body);
	response.end();
}

function upload(response,request){
	console.log("request handler for upload was called");
	var form=new formidable.IncomingForm();
	form.uploadDir="/home/sheetal/learnyoumust/tmp/";
	var moveTo="/home/sheetal/learnyoumust/tmp/test.png";
	console.log("about to parse");
	form.parse(request,function(error,fields,files){
		console.log("parsing done");
		console.log(files);
		if(error){
			console.log(error);
		}
		else
		{
			fs.rename(files.upload.path,moveTo,function(err){
						if(err){
							console.log(err);
							fs.unlink(moveTo);
							fs.rename(files.upload.path,moveTo);
						}
					});
		}
		response.writeHead(200,{'content-type':'text/html'});
		response.write("recieved upload");
		response.write("<img src='/show'>");
		response.end();
	});
}

function show(response){
	console.log("request handler for start was called");
	fs.readFile("/home/sheetal/learnyoumust/tmp/test.png",'binary',function(err,file){
		if(err){
			response.writeHead(500,{'content-type':'text/plain'});
			response.write(err+'\n');
			response.end();			
		}
		else{
			response.writeHead(200,{'content-type':'image/png'});
			response.write(file,'binary');
			response.end();
		}
	});
}

exports.start=start;
exports.upload=upload;
exports.show=show;		