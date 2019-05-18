const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = 3000
const app = express()

const Server = http.createServer(app)

mongoose.connect('mongodb://localhost:27017/test', {useCreateIndex: true, useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('../client/'));
app.use('/', Routing)

Server.listen(PORT, function(){
    console.log('Server is listening on port: ' + PORT)
})