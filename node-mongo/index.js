const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url='mongodb://localhost:27017/';
const dbname='conFusion';

MongoClient.connect(url,(err,client)=>
{
    assert.equal(err,null);
    console.log("Database is successfully connected");
    const db=client.db(dbname);
    const collection=db.collection("dishes");
    collection.insertOne({"name":"Abhinash","description":"Always hotchhhh"},(err,result)=>
    {
        assert.equal(err,null);
        console.log(result.ops);

        collection.find({}).toArray((err,doc)=>
        {
            assert.equal(err,null);
            console.log(doc);

            db.dropCollection('dishes', (err,result)=>
            {
                assert.equal(err,null);

                client.close();
            });



        });
    })
})