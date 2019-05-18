var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/nodeDriver"

const dbName = "test"

const client = new MongoClient(url, {useNewUrlParser: true })

client.connect(function(err){
    if(err)console.log(err)
    console.log("Conexion establecida con la base de datos")

    const db = client.db(dbName)
    let users = db.collection("users")

    users.insertOne(
        {usuario: 'admin', password: 'admin', nombreCompleto: 'Rodrigo Villarreal', fechaNacimiento: '1985-01-28', estado: 'Activo'}
    , (err, result) => {
        if(err)console.log("Se produjo un error insertando usuarios: "+err)
        console.log("Resultado: " + result)
    })
})