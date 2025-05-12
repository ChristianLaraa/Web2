//importar express
const express = require('express');

//Generar una instancia de express

const app = express();

//definicion de puerto
const port = 1040;

//peticiones vs metodos
//ESTA ES UNA PETICION GET
app.get('/', (req, res) => {
    res.send('Hola Mundo desde un puerto 1040');    
});

app.listen(port);