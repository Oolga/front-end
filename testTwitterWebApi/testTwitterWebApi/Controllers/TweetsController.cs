using System;
using System.Collections.Generic;
using System.Web.Mvc;
using testTwitterWebApi.App_Start;
using TweetSharp;


namespace testTwitterWebApi.Controllers
{

	public class TweetsController : System.Web.Http.ApiController
	{

		private static string consumer_key = TwitterAppConfig.ConsumerKey;
		private static string consumer_secret_key = TwitterAppConfig.ConsumerSecretKey;
		private static string access_token = TwitterAppConfig.AccessToken;
		private static string access_secret_token = TwitterAppConfig.AccessSecretToken;

		[HttpGet]
		public JsonResult GetTweets()
		{
			TwitterService twitter = new TwitterService(consumer_key, consumer_secret_key, access_token, access_secret_token);

			var options = new ListTweetsOnUserTimelineOptions { ScreenName = "testAppTApi10" };

			var searchedTweets = new List<TwitterStatus>(twitter.ListTweetsOnUserTimeline(options));

			return new JsonResult()
			{
				Data = searchedTweets,
				JsonRequestBehavior = JsonRequestBehavior.AllowGet,
				MaxJsonLength = Int32.MaxValue
			};
		}


	}
}
