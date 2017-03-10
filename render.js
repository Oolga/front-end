var renderTweets=(function(){
	//debugger;
	var count;//=$('#count');
	var renderedTweets;//=$("#renderedTwetts");
	var result;
	var renderedMessage;

	return{
		renderTweetsTable: function(data){
			renderedTweets.tmpl({tweets:data}).appendTo(result);
		},
		renderCountOfReadedTweets: function(countReadedTweets){
			count.text(""+countReadedTweets);
		},

		setTegs: function(countTeg, renderedTweetsTeg, resultTeg){
			count=countTeg;
			renderedTweets=renderedTweetsTeg;
			result=resultTeg;
		},

		setMessageTeg: function(nameTeg){
			renderedMessage=nameTeg;
		},

		renderMessage: function(message){
			renderedTweets.tmpl({"Message":message}).appendTo(result);
		}
		
	};
}());