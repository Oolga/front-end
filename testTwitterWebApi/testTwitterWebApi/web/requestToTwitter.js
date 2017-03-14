(function(){
	'use strict';

	var url="http://localhost:520/api/Tweets/GetTweets";
	var data="";

	$(document).ready(function(){
		requestToTwitter();
		twitter.checkSessionStorage();
	});

	function requestToTwitter(){
	debugger;
		$.ajax({
				type: "GET",
				dataType: "json",
				traditional: true,
				data: data,
				url: url,
				success: function (data) {
						debugger;
						twitter.setTweetsByTag(data);
       					renderTweets.renderTweetsTable(twitter.getTweetsByTag().Data);
        				debugger;
					}
			});	
	};
}());