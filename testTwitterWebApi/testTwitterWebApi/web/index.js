(function (){
	'use strict';
	debugger;
	var url="http://localhost:520/api/Tweets/GetTweets";
	var data="";
	var result=$("#result");
	var count=$('#count');
	var renderedTweets=$("#renderedTwetts");
	var renderedMessage=$("#renderedMessage");
	var read;
	var readName="button.read";

	var userURL="https://twitter.com/testAppTApi10/status/";

	var tweetsForRender=[];
	var first=1;

	var countReadedTweets=0;
	var timeout=3000;

	$(document).ready(function(){
		debugger;
		renderTweets.setTegs(count, renderedTweets, result);
		renderTweets.setMessageTeg(renderedMessage);
		debugger;
		myIndexedDB().init();
		//getStorage().setStorage();
		countReadedTweets=twitter.checkStorage();
	//requests.requestGET(url, data, renderTweetsTable,"json");
		setInterval(function(){requests.requestGET(url, data, renderTweetsTable,"json")}, timeout);
		
	});

	function errorFunction(jqXHR,textStatus, errorThrown){

	};

	function readTweet(){
		debugger;
		var IdTweet=this.Id;
		var i = this.parentNode.parentNode.rowIndex;
		twitter.pushTweet(tweetsForRender[this.Id]);

		read=$(readName);

		$.each(read, function(){
			if (this.Id>IdTweet)
			{
				this.Id=Number(this.Id)-1;
			}
		});

		tweetsForRender.splice(this.Id, 1);
	
		

		this.parentNode.parentNode.remove();

		countReadedTweets+=1;
		renderTweets.renderCountOfReadedTweets(countReadedTweets);
	};


	function changeData(data){
		debugger;
		data.html=data.html.replace("//platform.twitter.com/widgets.js","http://platform.twitter.com/widgets.js");
			
			
		var tr=$("<tr></tr>");
		var td=$("<td></td>");
		td.append(data.html);
		var butTd=$("<td></td>");
		var butt=$("<button class=\"btn btn-success read\">Read</button>");
		var idTweet=data.url.replace(userURL,"");
		$.map(butt,function(val,i)
    		{
    			val.Id=tweetsForRender.findIndex(x => x.id_str===idTweet);
    			//debugger;
    			val.onclick=readTweet;
    		});

		butTd.append(butt);
		
		tr.append(td);
		tr.append(butTd);
        result.append(tr);

	}

	function renderTweetsTable(data) {
		//debugger;
		

		if (first===1)
		{
		twitter.setTweetsByTeg(data);
		}

		renderTweets.renderCountOfReadedTweets(countReadedTweets);
		
		
		if (first!=1)
		{
		twitter.getTweetsByTeg().Data= data.Data.filter(function(x) { 
		 	return twitter.isNewTweet(x); });
		}

		twitter.getTweetsByTeg().Data= twitter.getTweetsByTeg().Data.filter(function(x) { 
		 	return !twitter.isReadedTweet(x); });

		if (twitter.getTweetsByTeg().Data.length!==0)
		{

			for (var i=0; i<twitter.getTweetsByTeg().Data.length;i++)
			{

				requests.requestGET("https://api.twitter.com/1/statuses/oembed.json?url="+userURL+twitter.getTweetsByTeg().Data[i].id_str, "", changeData,"jsonp");
				tweetsForRender.push(twitter.getTweetsByTeg().Data[i]);
			}

    		
    	}
    	else
    	{
    		if (tweetsForRender.length==0)
    		{
				result.find('tr').slice(2).remove();
    			/*var tr=$("<tr></tr>");

    			tr.text("No new tweets");
    			$('#result').append(tr);*/
    			renderTweets.renderMessage("No new tweets");
    		}

    	}

     	first=0;
      	twitter.setTweetsByTeg({Data:tweetsForRender});
	};

}());