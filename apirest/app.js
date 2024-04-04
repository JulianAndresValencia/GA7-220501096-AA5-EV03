/*
● Se requiere realizar un servicio web para un registro y un inicio de sesión. El servicio recibirá un usuario y
  una contraseña, si la autenticación es correcta saldrá un mensaje de autenticación satisfactoria en caso
  contrario debe devolver error en la autenticación.
● El código debe contener comentarios
● Se debe crear el proyecto utilizando herramientas de versionamiento.
*/

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //Agregado para poder destructurar el post request

app.use(bodyParser.json());

//Dar acceso a la direccion del frontend para que pueda postear a la api
app.use((req, res, next) => { 
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//Abrir la pagina principal "Login"
app.get('/',(req,res)=>{
    res.send('Inicio');
})
app.post('/ensa',(req,res)=>{
  console.log(req.body);
  res.json("hla");
})
//Para gestionar a bases de datos mongo atlas
app.use('/api/user',require('./routes/db_Users'));
app.use('/api/register',require('./routes/db_register'));
app.set('json spaces',2); //configuracin de los espacion para el formato json

app.listen(30001);