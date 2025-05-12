const  express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express ();

//Datos enviados por medio de html van por medio de la url y se genera un request
//Se utiliza el bodyparser atraves de express

//manejo de peticiones de http por medio de req
app.use(bodyParser.urlencoded({ extended:false }));

//configuración de plantillas
app.set('view engine', 'ejs');



//conexion a la BD
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', 
    password: 'Lunapug09.',  //password de la base de datos
    database: 'node_crud',
    port: 3306
});

//validacion

db.connect((err) => {
    if(err){
        console.log('Error de conexion a la base de datos', err);
    
    }else{
        console.log('Conectado a la base de datos de manera correcta :)');
    }
});

//inicio de server

const port = 3008;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});

//mostrar lista de usuarios
app.get('/', (req, res) => {
    //consulta a la base de datos
    const consultaDB = 'SELECT * FROM users';

    //trabajamos con la conexion 
    db.query(consultaDB, (err, results)=>{
        if(err){
            //no se encontro al usuario o se tiene un error
            console.log('Error al recuperar usuarios', err);
            //mostraremos informacion al usuario
            resizeTo.send('Error, no se recuperan los datos de la DB');
        }else {

            res.render('index', { users: results });
        }

    });
});

//Modulo para agregar un usuario
app.post('/add', (req, res) => {
    const {name, email}=req.body;
    /*
        nombre: chris
        correo: christianlara225@aragon.unam.mx
    */
    const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    db.query(insertarRegistro, [name, email], (err) => {
        if(err){
            console.log('Error al agregar usuario: ', err);
            res.send('Error al agregar usuario');
        } else {
            res.redirect('/');
            
        }
    });

});
