const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = "mongodb://localhost:27017"
const dbName = "test"

const client = new MongoClient(url, {useNewUrlParser: true })

client.connect(function(err){
    assert.equal(null, err)
    console.log('Conectado al servidor')

    const db = client.db(dbName)

    let users = db.collection("users")
    users.find().toArray((error, documents) => {
        if(error)console.log(error)
        console.log(documents)
    })

    client.close()
})