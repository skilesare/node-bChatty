
var bChatty = require('./bChattyModel').bChatty;
var app= require('express').createServer();

app.set("view engine", "hbs");
app.set('views','node-bChatty/views');
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
setTimeout(function(){
	res.write('Test\n');
	res.end();
	
},5000);

}
);

app.listen(80);
