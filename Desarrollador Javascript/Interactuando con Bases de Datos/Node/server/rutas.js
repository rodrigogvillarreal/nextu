const Router = require('express').Router();
const Users = require('./userModel.js');
const Events = require('./eventModel.js');
const localStorage = require('node-localstorage').LocalStorage;
storage = new localStorage('./node_db');

/*
    Función que valida si el usuario existe en la base de datos
*/
Router.post('/login', function(req, res){    

    let user = req.body.user
    let pass = req.body.pass
    Users.findOne({ usuario: user, password: pass }, function(err, doc){
        if(err){
            res.status(500)
            res.json(err)
        }
        //res.json(doc)     
        if(!doc){
            res.send('Usuario no válido')
        }else{    
            storage.setItem('usuario', doc.usuario);        
            res.send('Validado')
        }
    })
})

/*
    Función que agrega un nuevo usuario
*/
Router.post('/new', function(req, res){
    let user = new Users({
        usuario: req.query.usuario,
        password: req.query.password,
        nombreCompleto: req.query.nombreCompleto,
        estado: req.query.estado
    })
    user.save(function(err){
        if(err){
            res.status(500)
            res.json(err)
        }
        res.send('Usuario Almacenado')
    })
})

/*
    Función que devuelve todos los eventos
*/
Router.get('/events/all', function(req, res){
    let useritem = storage.getItem('usuario')
    Events.find({ user: useritem }, function(err, doc){
        if(err){
            res.status(500)
            res.json(err)
        }
        res.json(doc)
    })
})

/*
    Función que almacena un nuevo evento
*/
Router.post('/events/new', function(req, res){
    let event = new Events({
        id: Math.floor(Math.random() * 50),
        title: req.body.title,
        start: req.body.start,
        start_hour: req.body.start_hour,
        end: req.body.end,
        end_hour: req.body.end_hour,
        user: storage.getItem('usuario')
    })
    event.save(function(err){
        if(err){
            res.status(500)
            res.json(err)
        }
        res.send('Evento almacenado')
    })
})

/*
    Función que elimina un evento
*/
Router.post('/events/delete', function(req, res){
    let id = req.body.id
    Events.deleteOne({ id: id }, function(err){
        if(err){
            res.status(500)
            res.json(err)
        }
        res.send('Evento eliminado')
    })
})

/*
    Función que actualiza un evento
*/
Router.post('/events/update', function(req, res){
    Events.updateOne({ _id: req.body.id }, { 
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
     }, function(err){
         if(err){
            res.status(500)
            res.json(err)
         }
         res.send('Evento actualizado')
     })
})

module.exports = Router