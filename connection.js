const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true});

mongoose.connection.once('open',function(){
	console.log('Connected Successfully . . .');
}).on('error',function(error){
	console.log('error is:',error);
});