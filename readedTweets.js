(function(){
	debugger;
	'use strict';
	var readedTweets=JSON.parse(storageManager.getItem("readedTweets"));
	var result=$("#result");
	var	renderedTweets=$("#renderedTwetts");

	$(document).ready(function(){
		debugger;
		renderTweets.setTegs(null,renderedTweets,result);

		renderTweets.renderTweetsTable(readedTweets);
	});
}());