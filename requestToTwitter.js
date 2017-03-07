(function(){
	'use strict';
	 var xmlHTTPRequest;
	 var tweetsByTeg;

window.onload=requestToTwitter;
	


function requestToTwitter(){
	xmlHTTPRequest =new XMLHttpRequest();
	xmlHTTPRequest.open("GET", "http://localhost:520/api/Twitter/GetTweets");
	debugger;

	xmlHTTPRequest.onreadystatechange = function() {
    if (this.status == 200)
    	{
       	 tweetsByTeg= JSON.parse(this.responseText);
       	 renderTweetsTable();
        	debugger;
    	}
	};
		xmlHTTPRequest.send();
};

function renderTweetsTable(){
	var table=document.createElement("table");
	table.className="table table-striped";
	debugger;

	var trHead=document.createElement("tr");
	trHead.innerHTML="Tweets by tag #test";

	table.appendChild(trHead);

	

	for (var i=0; i< tweetsByTeg.Data.statuses.length;i++)
	{

		var trBody=document.createElement("tr");
		trBody.className="mt-1";

		var td=document.createElement("td");
		td.className="bg-info";
		td.innerHTML=tweetsByTeg.Data.statuses[i].Text;

		var tdButton=document.createElement("button");
		tdButton.innerHTML="read";
		tdButton.className="btn btn-success";

		trBody.appendChild(td);
		trBody.appendChild(tdButton);
		
		table.appendChild(trBody);
	}
	
	var result=document.getElementById("result");
	result.appendChild(table);
};

}());