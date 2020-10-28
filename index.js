const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
/*
userVargas
7JEhI5W5fUH2FByE*/

/*
String conección
mongodb+srv://userVargas:7JEhI5W5fUH2FByE@cluster0.6vtsf.mongodb.net/test
*/


const server = express();

//Configurando cors

server.use(cors());


//Primera Petición GET

server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando primer servicio rest'
    });
});
//CONEXIÓN A LA BASE DE DEATOS
dbconection();

//console.log(process.env);

//DESPLIEGUE DEL SERVIDOR
server.listen(process.env.PORT, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + process.env.PORT),
        console.log('Carlos Daniel Vargas Llamo')
});




//console.log('Hola mundo');