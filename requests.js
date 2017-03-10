var requests=(function () {
	return {
		requestGET: function (url, data, callBackFunction) {
			$.ajax({
				type: "GET",
				dataType: "json",
				traditional: true,
				data: data,
				url: url,
				success: function (data) {
					if (callBackFunction != undefined && typeof callBackFunction == "function") {
						callBackFunction(data);
					}
				}
			});
		}
	};
})();