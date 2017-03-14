var twitter=(function(){
	var tweetsByTeg; 
	//var countReadedTweets=0;
	var readedTweets=[];

	var storageItemName="readedTweets";
	
	return{
		pushTweet: function(tweet){
			debugger;
			readedTweets.push(tweet);
			//myIndexedDB().addData("tweets",tweet);
			storageManager().setItem( storageItemName,tweet);
		},

		isReadedTweet: function (tweet){
			//debugger;
			if (readedTweets.length===0){
				return false;
			}
			else{
				for (var i=0; i<readedTweets.length;i++)
				{
					if (readedTweets[i].id_str===tweet.id_str)
					{
						return true;
					}
				}
			}
			return false;
		},

		setTweetsByTeg: function(data){
			tweetsByTeg=data;
		},

		getTweetsByTeg: function(){
			return tweetsByTeg;
		},

		setReadedTweets: function(data){
			readedTweets=data;
			//countReadedTweets=readedTweets.length;
		},

		getReadedTweets: function(){
			return readedTweets;
		},

		checkStorage: function(){
			if (storageManager().getItem( storageItemName)!=null && storageManager().getItem( storageItemName)!="")
				{
					debugger;
					readedTweets=JSON.parse(storageManager().getItem( storageItemName));
					return readedTweets.length;
				}
			else 
				{
					//storageManager().setItem( storageItemName, "");
					return 0;
				}
		},

		isNewTweet: function(tweet){

				for (var i=0; i<tweetsByTeg.Data.length;i++)
				{
					if (tweetsByTeg.Data[i].id_str===tweet.id_str)
					{
						return false;
					}
				}
				return true;
			}

	};
}());