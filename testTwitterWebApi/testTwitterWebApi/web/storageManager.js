function storageManager(){
	var storage;//=window.sessionStorage;

	return {
		
		getStorage: function(){
			//debugger;
	 		var ua = window.navigator.userAgent;
	 		var numberBrowser=0;

   			var msie = ua.indexOf('MSIE ');
    		if (msie > 0) {
        		// IE 10 or older => return version number
         		numberBrowser= parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    		}

    		var trident = ua.indexOf('Trident/');
    		if (trident > 0) {
        		// IE 11 => return version number
        		var rv = ua.indexOf('rv:');
				numberBrowser=  parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    		}

    		var edge = ua.indexOf('Edge/');
   			if (edge > 0) {
      			 // Edge (IE 12+) => return version number
      			 numberBrowser= parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    		}

    		if (numberBrowser>0)
    		{
    			return window.indexedDB;
    		}
    		else
    		{
    			//return window.indexedDB;
    			return window.sessionStorage;
    		}

		},

		setItem: function(name, data){
			debugger;
			storage=storageManager().getStorage();
			if (storage===window.sessionStorage){
				storage.setItem(data.id_str,  JSON.stringify(data));
			}
			else{
				 myIndexedDB().addData("tweets",data);
			}
		},
		getItem: function(name){
			storage=storageManager().getStorage();
			var arr=[];
			if (storage===window.sessionStorage){
				for (var i=0, len=storage.length; i<len; i++)
			{
				var key = storage.key(i);
    			var value = storage[key];
    			arr.push(JSON.parse(value));
			}

			
			}
			else
			{
				console.log("getItem before arr");
				arr= myIndexedDB().getAll(function (items) {
					debugger;
					console.log("callback");
					return items;
  						 }
					);
				console.log("getItem after arr");
				debugger;
				//return arr;
			}
			return arr;//storage.getItem(name);
			
		}
	};
};