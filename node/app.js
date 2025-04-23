// importacion del modulo http que viene incluido en node.js
const paquetesServidorNodeImportado = require('http');

// se define un puerto de salida de servidor 
const port = 3005;

//crear un servidor 
const server = paquetesServidorNodeImportado.createServer((req, res)=>{
    //establecer encabezado de la respuesta
    res.writeHead(200, {'Content-type' : 'text/plain'});

    //enviar respuesta al cliente
    res.end("hola mundo con node.js");
});

//escuchar el puerto

server.listen(port, () => {
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});

//concepto de middleware
