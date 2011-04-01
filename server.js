
var bChatty = require('./bChattyModel').bChatty;
var express = require('express');
var app= express.createServer();

app.set("view engine", "hbs");
//app.set('views','views');
console.log(__dirname);
 

app.get('/', function( req,res){

var options = { cache: true,
compile: true,
locals: { "name" :"Austin" },
blockHelpers :{
	properties: function (context, fn){
		var props = JSON.parse("{" + fn(this) + "}");
		for(var prop in props){
			if(props.hasOwnProperty(prop)){
				context[prop] = props[prop];
				}
		}		
			}
	}
};

res.render('myview', options);

});

app.get('/testconvo', function(req,res){
	bChatty.newUser("skilesare","http://a2.twimg.com/profile_images/1159752915/Twitter_Icon_mini.png");

res.render('myview',{locals: {"name": bChatty.users["skilesare"].username}});


}
);


app.use(express.static(__dirname + '/public'));

app.listen(80);
