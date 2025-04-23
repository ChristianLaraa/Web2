function agregarPantalla(value){
    document.getElementById("pantalla").value+=value;
}


function calcular(){
    try{
        let result=eval(document.getElementById("pantalla").value);  //evalua una cadena de caracteres como una expresion ---> 
        document.getElementById("pantalla").value=result;
    }catch{
        document.getElementById("pantalla").value="Error";
    }
}

function limpiarPantalla(){
    document.getElementById("pantalla").value="";
}