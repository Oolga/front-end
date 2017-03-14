function myIndexedDB(){

	//var storage=window.indexedDB;


 var db = {
      
        version: 2, // important: only use whole numbers!
      
        objectStoreName: "tweets",
      
        instance: {},
      
        upgrade: function (e) {
      
            var
                _db = e.target.result,
                names = _db.objectStoreNames,
                name = db.objectStoreName;
      
            if (!names.contains(name)) {
      
                _db.createObjectStore(
                    name,
                    {
                        keyPath: "seq",
                        autoIncrement: true
                    });
            }
        }
    };

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
        	//debugger;
    		var r = window.indexedDB;
    		var req=r.open(IDBSetting.name, IDBSetting.version);

   			req.onsuccess = function(event) {
        		console.log("indexedDB open success");

    		};

    		req.onerror = function(event) {
       			console.log("indexed DB open fail");
    		};

    //callback run init or versionUp
    		req.onupgradeneeded = function(event) {
    			//debugger;
       			console.log("init onupgradeneeded indexedDB ");
        		var db = event.target.result;

        		for (var i in IDBSetting.tables) {
        			//debugger;
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

   		getAll: function(callback){
            console.log("getAll begin");

            var req = indexedDB.open(IDBSetting.name, IDBSetting.version);
            var db ;
            req.onsuccess = function(event){
                 db = req.result;
            }
            db;
                var trans = db.transaction("tweets", IDBTransaction.READ_ONLY);
                 var store = trans.objectStore("tweets");
                 var items = [];
 
                 trans.oncomplete = function(evt) {  
                    console.log("callback in getAll");
                     callback(items);
                };
 
                var cursorRequest = store.openCursor();
 
                cursorRequest.onerror = function(error) {
                    console.log(error);
                };
 
                cursorRequest.onsuccess = function(evt) {  
                console.log("cursor");                  
                     var cursor = evt.target.result;
                     if (cursor) {
                     items.push(cursor.value);
                     cursor.continue();
                    }

                 };

           // };

console.log("getAll end");
           // req.onsuccess();

/*

              db.open(function () {
      
                var
                    store = db.getObjectStore(),
                    cursor = store.openCursor(),
                    data = [];
      
                cursor.onsuccess = function (e) {
      
                    var result = e.target.result;
      
                    if (result &&
                        result !== null) {
      
                        data.push(result.value);
                        result.continue();
      
                    } else {
      
                        callback(data);
                    }
                };
      
            });*/

   		
   		}
		
	};
};