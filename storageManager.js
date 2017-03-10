var storageManager=(function(){
	var storage=window.sessionStorage;

	return {
		
		setItem:function(name,data){
			//debugger;
			storage.setItem(name,data);
		},
		getItem:function(name){
			//debugger;
			return storage.getItem(name);
		}
	};
}());