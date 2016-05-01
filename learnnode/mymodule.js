var path=require('path');
var fs=require('fs');

module.exports=function(dir,ext,callback){


fs.readdir(dir,function(err,files){
	
	if(err)
		callback(err);
		
	var lfiles=files.filter(function(file){
		if(path.extname(file)==('.'+ext)){
			return true;}
		else
			return false;
		});
	callback(null,lfiles);
});
}