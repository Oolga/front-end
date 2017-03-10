(function (){
	'use strict';
	debugger;
	var url="http://localhost:520/api/Tweets/GetTweets";
	var data="";
	var result=$("#result");
	var count=$('#count');
	var renderedTweets=$("#renderedTwetts");
	var read;
	var readName="button.read";

	var countReadedTweets=0;
	var timeout=3000;

	$(document).ready(function(){
		//debugger;
		renderTweets.setTegs(count,renderedTweets,result);

		countReadedTweets=twitter.checkStorage();
		//requests.requestGET(url, data, renderTweetsTable);
		setInterval(function(){requests.requestGET(url, data, renderTweetsTable)},timeout);
		
	});

	function readTweet(){
		//debugger;
		var i = this.parentNode.parentNode.rowIndex;
		twitter.pushTweet(twitter.getTweetsByTeg().Data[i-2]);

		twitter.getTweetsByTeg().Data.splice(i-2, 1);
	
		this.parentNode.parentNode.remove();

		countReadedTweets+=1;
		renderTweets.renderCountOfReadedTweets(countReadedTweets);
	};

	function renderTweetsTable(data) {
		debugger;
		
		twitter.setTweetsByTeg(data);
		result.find('tr').slice(2).remove();
		renderTweets.renderCountOfReadedTweets(countReadedTweets);
		
		twitter.getTweetsByTeg().Data= twitter.getTweetsByTeg().Data.filter(function(x) { 
		 	return !twitter.isReadedTweet(x); });
		if (twitter.getTweetsByTeg().Data.length!==0)
		{
       		renderTweets.renderTweetsTable(twitter.getTweetsByTeg().Data);

    		read=$(readName);

    		$.map(read,function(val,i)
    		{
    			//debugger;
    			val.onclick=readTweet;
    		});
    	}
    	else
    	{
    		renderTweets.setMessageTeg($("#renderedMessage"));
    		renderTweets.renderMessage("No new tweets");
    		//result.text("No new tweets");
    	}
      //  debugger;
	};

}());