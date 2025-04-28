//importar un mdulo
const serverHTTP = require('http');

//definir un puerto
const port = 3029;

//crear un sevidor 
// concepto de servidor web
// se envian infos y peticiones
// HTTP es un protocolo de comunicacion
// URI
//FTP
//DNS



// crear el servidor
const server = serverHTTP.createServer((req, res)=>{
    res.writeHead(200, {'content-Type' : 'text-plain'});
    res.end('Hola desde un server con http con el modulo http de node.js')
});

server.listen(port, ()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`);
});