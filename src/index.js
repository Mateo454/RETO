const express = require('express');
const { route } = require('express/lib/application');
//contected to moongodb
const mongoose= require('mongoose');

require('dotenv').config()
const userRoute=require('../routes/user')

const app = express();
const port= process.env.PORT||3000;

app.listen(port,()=>console.log('Escuchando por el puerto ', port))

//conexion con las rutas
//rutas del proyecto
app.get('/', (req, res)=>{
    res.send('welcome to api')
    });
    

mongoose.connect(process.env.MONGOCONNECTION)
.then(()=>console.log('Mongo DB connected '))
.catch((err)=>console.error(err))

//midlewares URI DE CONEXION PARA PROBAR LOS REQUEST(Get, Post, Delete, Put)
app.use(express.json());
//localhost:3000/api/users
app.use('/api',userRoute);



