exports.bChatty = {

	contexts:  new Array(),
	users : new Array(),
	covos : new Array(),
	newContext: function(type,namespace,name)
		{
			var o={"type": type,
				"namespace": namespace,
				"name": name};

			this.contexts[o.namespace] = o;
			return o;
		},
	newUser: function(username, avatar)
			{
				var u = {
						"username": username,
						"avatar": avatar,
						"userContexts": new Array(),
						"userForbiddenContexts": new Array(),
						"newUserContext": function (Context,Rank)
								{
									userContext[Context.namespace] = Context;
									userContext[Context.namespace].rank = Rank;
								}
					}
				this.users[u.username] = u;
				return u;
			},
	newConvo : function(userList, context)
			{
				var c = {"context" : context};
				c.users = new Array();
				c.namespace = context.namespace;
				_.each(userList, function(thisUser){ c.users.push(thisUser);
					c.namespace += '_' + thisUser.username;
					});
				
				c.chats = new Array();
				this.convos[c.namespace]=c;
			}
				
}





