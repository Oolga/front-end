var renderTweets=(function(){

	return{
		renderTweetsTable: function(data){
		$("#renderedTwetts").tmpl(data).appendTo($("#result"));
		},
		renderCountOfReadedTweets: function(countReadedTweets){
			$("#count").text=""+countReadedTweets;
		}
	};
	

}());