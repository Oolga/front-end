using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testTwitterWebApi.App_Start
{
	public class TwitterAppConfig
	{
		private static TwitterAppConfig instance = new TwitterAppConfig();
		public static string ConsumerKey {
			get {
				return System.Configuration.ConfigurationManager.AppSettings["ConsumerKey"];
			}
		}
		public static string ConsumerSecretKey {
			get {
				return System.Configuration.ConfigurationManager.AppSettings["ConsumerSecretKey"]; 
			}
		} 
		public static string AccessToken {
			get {
				return System.Configuration.ConfigurationManager.AppSettings["AccessToken"];
			}
		} 
		public static string AccessSecretToken {
			get {
				return System.Configuration.ConfigurationManager.AppSettings["AccessSecretToken"];
			}
		}

		private TwitterAppConfig() { }

		public static TwitterAppConfig getInstance()
		{
			return instance;
		}
	}
}