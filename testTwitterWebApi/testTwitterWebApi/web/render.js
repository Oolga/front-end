var renderTweets=(function(){
	//debugger;
	var count;
	var renderedTweets;
	var result;
	var renderedMessage;

	return{
		renderTweetsTable: function(data){
			//debugger;
			renderedTweets.tmpl(data).appendTo(result);
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
			var m=JSON.stringify({"Message":message});
			renderedMessage.tmpl(m).appendTo(result);
		}
		
	};
}());