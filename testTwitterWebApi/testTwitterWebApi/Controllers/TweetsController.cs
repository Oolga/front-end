using System;
using System.Web.Mvc;
using TweetSharp;


namespace testTwitterWebApi.Controllers
{

	public class TweetsController : System.Web.Http.ApiController
	{
		private static string consumer_key = System.Configuration.ConfigurationManager.AppSettings["ConsumerKey"];
		private static string consumer_secret_key = System.Configuration.ConfigurationManager.AppSettings["ConsumerSecretKey"];
		private static string access_token = System.Configuration.ConfigurationManager.AppSettings["AccessToken"];
		private static string access_secret_token = System.Configuration.ConfigurationManager.AppSettings["AccessSecretToken"];

		TwitterService twitter = new TwitterService(consumer_key, consumer_secret_key, access_token, access_secret_token);


		[HttpGet]
		public JsonResult GetTweets()
		{

			SearchOptions options = new SearchOptions { Q = "#test", Resulttype = TwitterSearchResultType.Recent, Count = 10 };
			var searchedTweets = twitter.Search(options);

			return new JsonResult()
			{
				Data = searchedTweets,
				JsonRequestBehavior = JsonRequestBehavior.AllowGet,
				MaxJsonLength = Int32.MaxValue
			};
		}


	}
}
