(function(){
	debugger;
	'use strict';
	var itemName="readedTweets";
	var readedTweets="";
	var result=$("#result");
	var	renderedTweets=$("#renderedTwetts");
	var userURL="https://twitter.com/testAppTApi10/status/";

	function changeData(data){

		data.html=data.html.replace("//platform.twitter.com/widgets.js","http://platform.twitter.com/widgets.js");
			
		var tr=$("<tr></tr>");
		var td=$("<td></td>");
		td.append(data.html);


		tr.append(td);

        result.append(tr);
	}


	$(document).ready(function(){
		debugger;
		renderTweets.setTegs(null,renderedTweets,result);
		//readedTweets=storageManager().getItem(itemName);
		var s=storageManager().getItem(itemName);
		if (s.length!==0)
		{
			readedTweets=s;
		}

		if (readedTweets.length>0 || readedTweets!=="")
			{
			for (var i=0; i<readedTweets.length;i++)
				{
					requests.requestGET("https://api.twitter.com/1/statuses/oembed.json?url="+userURL+readedTweets[i].id_str, "", changeData,"jsonp");
				}
			}
		else
			{
				result.find('tr').slice(1).remove();
    			var tr=$("<tr></tr>");

    			tr.text("No readed tweets");
    			$('#result').append(tr);
			}
	});
}());