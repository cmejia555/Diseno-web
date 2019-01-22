const mongoClient = require("mongodb").MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017";

function initDataBase(dbName) {
	mongoClient.connect(url, onConnect);

	function onConnect(err, db)	{
		if(err) throw err;
		var dbo = db.db(dbName); // crea la base de datos "firstdb"
		assert.equal(null, err);

		var obj = [{name: "cesar", lastname:"mejia", years:27},
			{name: "mauricio", lastname: "mejia"},
			{name: "debora", lastaname: "darena de mejia"}
		];

		console.log("Connected successfully to server");
		insertDocument(dbo, obj, function() {
			findDocument(dbo, {years:28}, function() {
				deleteDocument(dbo, {name: "cesar"}, function() {
					dropCollection(dbo, "borrar_2", function() {
						updateDocument(dbo, 
										{name: "debora"},
										{$set: {name: "vanesa"}}, 
										function() {
											joinCollection(dbo, function() {
												db.close();
											});
										});
					});
				});
			});
		});
	}
}


function insertDocument(dbo, documents, callback) {
	dbo.collection("collection_1").insertMany(documents, // crea la colleccion e inserta documentos
		function(err, result) {
			if(err) throw err;
			console.log("Documents inserted: " + result.insertedCount);
			callback(result);
		});
}

function findDocument(dbo, query={}, callback) { // si el query es {}, encuentra todos
	dbo.collection("collection_1").find(query).toArray(function(err, docs) {
    	if (err) throw err;
    	console.log("\n\nDocumentos encontrados: \n");
    	console.log(docs);
    	callback(docs);
	});
}

function deleteDocument(dbo, query, callback) {
	dbo.collection("collection_1").deleteMany(query, function(err, obj) { // deletaMany devuelve un obj con los datos borrados
		assert.equal(err, null);
		console.log("Removed document: " + obj.result.n);
		callback(obj);
	});
}

function updateDocument(dbo, query, newValue, callback) {
	dbo.collection("collection_1").updateMany(query, newValue, function(err, result) {
		assert.equal(null, err);
		console.log("Document(s) updated: " + result.result.nModified);
		callback(result);
	});
}

function dropCollection(dbo, collecName, callback) {
	dbo.collection(collecName).drop(function(err, del) {
		//assert.equal(null, err); descomentar para ejecutar el assert
		if (del) console.log("Collection deleted");
		callback(del);
	});
}

function joinCollection(dbo, callback) {
	dbo.collection("borrar").aggregate([
		{ $lookup: {
			from: "collection_1",
			localField: "name", // de 'borrar' machea los campos 'name'
			foreignField: 'name', // con todos los campos 'name' que coincidan de 'collection_1'
			as: 'orderdetails' // y guardalo en el campo 'orderdetails'
			}
		}
		]).toArray(function(err, result) {
			//assert.equal(null, err);
			console.log(JSON.stringify(result));
			callback(result);
		});
}


exports.init = initDataBase;

// functions CRUD
exports.insert = insertDocument;		// create
exports.find = findDocument;			// read
exports.update = updateDocument;		// update
exports.delete = deleteDocument;		// delete

exports.drop = dropCollection;