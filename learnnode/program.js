var http = require('http') ;
var server = http.createServer(function (req,res) {  
	if(req.method=='POST');
		req.write(function(chunk){console.log(chunk);});
})  
server.listen(process.argv[2]) 


/*
var fs = require('fs') ;
fs.createReadStream(process.argv[3]).pipe(res);


var ts='';
var date= new Date();
var server = http.createServer(function (req,res) {  
     ts+=date.getFullYear();  
     ts+='-'+(1+date.getMonth()); // starts at 0  
     ts+='-'+date.getDate();      // returns the day of month  
     ts+=' '+date.getHours();  
     ts+=':'+date.getMinutes(); 
     socket.write(ts);
     socket.end(""); 
})  
server.listen(process.argv[2]) 


var http=require('http');
var res='';
http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on("data",function(data,err){ if(err) console.log(err); else res+=data;});
	response.on("end",function(err){if(err) console.log(err); else {
		console.log(res);
		res='';
		http.get(process.argv[3], function(response){
		response.setEncoding('utf8');
		response.on("data",function(data,err){ if(err) console.log(err); else res+=data;});
		response.on("end",function(err){if(err) console.log(err); else {
			console.log(res);
			res='';
			http.get(process.argv[4], function(response){
			response.setEncoding('utf8');
			response.on("data",function(data,err){ if(err) console.log(err); else res+=data;});
			response.on("end",function(err){if(err) console.log(err); else {console.log(res);} });
			response.on("error",function(error){ console.log(error)});
			});
		} });
		response.on("error",function(error){ console.log(error)});
		});
	} });
	response.on("error",function(error){ console.log(error)});
});


var  mymodule=require('./mymodule.js');
var dir=process.argv[2];
var ext=process.argv[3];

function listoffiles(err,files){
	if(err)
		console.log(err);
	for(i in files)
		console.log(files[i]);
}

mymodule(dir,ext,listoffiles);*/
/*
fs.readFile(process.argv[2],'utf8',function(err,data){
if(err) throw err;
data=data.toString();
data=data.split('\n');
console.log(data.length -1);
});
*/
/*
b=process.argv.slice(2);
sum=0;
for(i in b) sum=sum+Number(b[i]);
console.log(sum);
*/
//console.log("HELLO WORLD");


