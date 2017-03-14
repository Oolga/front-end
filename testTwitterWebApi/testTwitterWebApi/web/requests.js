var requests=(function () {
	return {
		requestGET: function (url, data, callBackFunction,dataType) {
			//debugger;
			$.ajax({
				type: "GET",
				dataType: dataType,
				traditional: true,
				data: data,
				url: url,
				async:false,
                cache:false,
				success: function (data) {
					//debugger;
					if (callBackFunction != undefined && typeof callBackFunction == "function") {
						callBackFunction(data);
					}
				}/*,
				error: function(jqXHR,textStatus, errorThrown){
					if (errorFunction != undefined && typeof errorFunction == "function") {
						errorFunction(textStatus, errorThrown);
					}
				}*/
			});
		}
	};
})();