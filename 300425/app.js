//importar express
const express = require('express');

//Generar una instancia de express

const app = express();

//definicion de puerto
const port = 1904;

//peticiones vs metodos
//ESTA ES UNA PETICION GET
app.get('/', (req, res) => {
    res.send('Hola Mundo desde puerto 1904');    
});

app.listen(port);