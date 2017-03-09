(function(){
	debugger;
'use strict';
var tweetsByTeg=JSON.parse(window.sessionStorage.readedTweets);
window.onload=renderTweetsTable;

function renderTweetsTable(){
	var table=document.createElement("table");
	table.className="table table-striped";
	debugger;

	var trHead=document.createElement("tr");
	trHead.innerHTML="Tweets by tag #test";

	table.appendChild(trHead);

	

	for (var i=0; i< tweetsByTeg.length;i++)
	{

		var trBody=document.createElement("tr");
		trBody.className="mt-1";
		trBody.id=tweetsByTeg[i].id;

		var td=document.createElement("td");
		td.className="bg-info";
		td.innerHTML=tweetsByTeg[i].Text;

		trBody.appendChild(td);

		table.appendChild(trBody);
	}
	
	var result=document.getElementById("result");
	result.appendChild(table);
};
}());