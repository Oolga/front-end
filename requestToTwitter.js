(function(){
	'use strict';
	 var tweetsByTeg;
	 
	 var countReadedTweets=0;

	 debugger;
	 var readedTweets=[];
	 
	window.onload=requestToTwitter;


	function checkSessionStorage(){
		if (storageManager.getItem("readedTweets")!=null && storageManager.getItem("readedTweets")!="")
			{
				debugger;
				readedTweets=JSON.parse(storageManager.getItem("readedTweets"));
				countReadedTweets=readedTweets.length;
			}
		else 
			{
			storageManager.setItem("readedTweets", "");
			}
	}

	function requestToTwitter(){
	debugger;
		$.ajax({
				type: "GET",
				dataType: "json",
				traditional: true,
				data: "",
				url: "http://localhost:520/api/Tweets/GetTweets",
				success: function (data) {
					debugger;
					tweetsByTeg= data;
       				renderTweets.renderTweetsTable(tweetsByTeg.Data);
        			debugger;
					}
			});
		
		checkSessionStorage();
		
	};

	function pushTweet(tweet){
		readedTweets.push(tweet);
		storageManager.setItem("readedTweets", JSON.stringify(readedTweets));
	};

function isReadedTweet(tweet){
	debugger;
	if (readedTweets.length==0)
		return false;
	else
	for (var i=0; i<readedTweets.length;i++)
	{
		if (readedTweets[i].Id==tweet.Id)
		{

			return true;
		}
	}
	return false;
}

function readTweet(){
	debugger;
	var i = this.parentNode.rowIndex;
	pushTweet(tweetsByTeg.Data.statuses[i-2]);

	tweetsByTeg.Data.statuses.splice(i-2, 1);
	
	var table=document.getElementById("result").children[0];
	table.deleteRow(Number(i));
	countReadedTweets+=1;
	render.renderCountOfReadedTweets(countReadedTweets);
};

}());