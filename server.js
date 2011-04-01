
var bChatty = require('./bChattyModel').bChatty;
var express = require('express');
var app= express.createServer();
var io = require('socket.io');

app.set("view engine", "hbs");
//app.set('views','views');
console.log(__dirname);
 

app.get('/', function( req,res){



res.render('bChatty');

});

app.get('/testconvo', function(req,res){
	bChatty.newUser("skilesare","http://a2.twimg.com/profile_images/1159752915/Twitter_Icon_mini.png");

res.render('myview',{locals: {"name": bChatty.users["skilesare"].username}});


}
);


app.use(express.static(__dirname + '/public'));

app.listen(80);

var socket = io.listen(app); 
socket.on('connection', function(client){ 
	
  // new client is here! 
  client.on('message', function(data){ 
  	if(client.bChattyUser)
	{
		
		
		
	}
	else
	{
		var notAuth = {Interface: 'logonInterface'};
		socket.send(notAuth)	;
	
	}
  
  
   }) ;
   
  client.on('disconnect', function(data){  }); 
}); 
