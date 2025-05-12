const express = require('express');
const router = express.Router();
const path = require('path');


//Definimos las rutas y los manejaodores

// ruta Formulario
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../index.html"));
});

/* ruta del archivo ruta2.html 
    router.get("/miruta2.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../ruta2.html"));
}); */

/* ruta del archivo ruta3.html 
    router.get("/miruta2.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../ruta3.html"));
}); */

/* ruta del archivo ruta4.html 
    router.get("/miruta2.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../ruta4.html"));
}); */



module.exports=router;