function myIndexedDB(){

	//var storage=window.indexedDB;

	var IDBSetting = {
    	name: "indexedDBName",
   		version: 2,
   		tables: [{
    	    tableName: "tweets",
        	keyPath: "seq",
        	autoIncrement: true
   	 		}]
	};


	return{
		init: function(){
		//	var request = window.indexedDB.deleteDatabase(IDBSetting.name);
			debugger;
    		var r = window.indexedDB;
    		var req=r.open(IDBSetting.name, IDBSetting.version);

   			req.onsuccess = function(event) {
        		console.log("indexedDB open success");
        		/*	debugger;
       			console.log("init onupgradeneeded indexedDB ");
        		var db = event.target.result;

        		for (var i in IDBSetting.tables) {
        			debugger;
           			var OS = db.createObjectStore(IDBSetting.tables[i].tableName, {
                		keyPath: IDBSetting.tables[i].keyPath,
                		autoIncrement: IDBSetting.tables[i].autoIncrement
            		});
        		}*/
    		};

    		req.onerror = function(event) {
       			console.log("indexed DB open fail");
    		};

    //callback run init or versionUp
    		req.onupgradeneeded = function(event) {
    			debugger;
       			console.log("init onupgradeneeded indexedDB ");
        		var db = event.target.result;

        		for (var i in IDBSetting.tables) {
        			debugger;
           			var OS = db.createObjectStore(IDBSetting.tables[i].tableName, {
                		keyPath: IDBSetting.tables[i].keyPath,
                		autoIncrement: IDBSetting.tables[i].autoIncrement
            		});
        		}
    		}
		},

		addData: function(table, data) {
        	var req = indexedDB.open(IDBSetting.name, IDBSetting.version);

       		req.onsuccess = function(event) {
            	try {
                	console.log("addData indexedDB open success");
                	var db = req.result;
                	var transaction = db.transaction([table], "readwrite");
                	var objectStore = transaction.objectStore(table);
                	var objectStoreRequest = objectStore.add(data);

                		objectStoreRequest.onsuccess = function(event) {
                	//console.log("Call data Insert success");
            	}
            	objectStoreRequest.onerror = function(event) {
                	console.log("addData error");
            	}

            	} catch (e) {
               		console.log("addDataFunction table or data null error");
                	console.log(e);
            	}

            
        	};

        	req.onerror = function(event) {
            	console.log("addData indexed DB open fail");
        	};
   		},

   		getAll: function(){
   			 try {
        		var req = indexedDB.open(IDBSetting.name, IDBSetting.version);

        		req.onsuccess = function(event) {
            		var db = req.result;
            		var transaction = db.transaction([table], "readonly");
            		var objectStore = transaction.objectStore(table);

            		var objectStoreRequest = objectStore.openCursor();

            		objectStoreRequest.onsuccess = function(event) {
                		var cursor = event.target.result;
                		if (cursor) {
                    		arr.push(cursor.value);
                    		cursor.continue();
                		} else {

                		}
            		}
        		};
        		req.onerror = function(event) {
            		console.log("getAllData indexed DB open fail");
        		};
    		} catch (e) {
        		console.log(e);
    		}
   		}
		
	};
};