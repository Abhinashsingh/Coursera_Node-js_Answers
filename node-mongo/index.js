const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log("Database is successfully connected");
    const db = client.db(dbname);
    dboper.insertDocument(db, { name: "Abhinash Singh", description: "Very kaimzzz" }, 'dishes', (result) => {
        console.log('Insert Document:\n', result.ops);

        dboper.findDocument(db, 'dishes', (docs) => {
            console.log('Found Documents:\n', docs);

            dboper.updateDocument(db, { 'name': 'Abhinash Singh' }, 'dishes', (result) => {
                console.log('updated Document:\n', result.result);
                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Documents:\n', docs);

                    db.dropCollection('dishes', (result) => {
                        console.log('Dropped Collection:', result);
                        client.close();
                    })
                });

            });

        });
    });


});