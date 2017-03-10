var twitter=(function(){
	var tweetsByTeg; 
	//var countReadedTweets=0;
	var readedTweets=[];

	var storageItemName="readedTweets";
	
	return{
		pushTweet: function(tweet){
			readedTweets.push(tweet);
			storageManager.setItem( storageItemName, JSON.stringify(readedTweets));
		},

		isReadedTweet: function (tweet){
			//debugger;
			if (readedTweets.length==0){
				return false;
			}
			else{
				for (var i=0; i<readedTweets.length;i++)
				{
					if (readedTweets[i].Id==tweet.Id)
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
			if (storageManager.getItem( storageItemName)!=null && storageManager.getItem( storageItemName)!="")
				{
					//debugger;
					readedTweets=(JSON.parse(storageManager.getItem( storageItemName)));
					return readedTweets.length;
				}
			else 
				{
					storageManager.setItem( storageItemName, "");
					return 0;
				}
		}

	};
}());