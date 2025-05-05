function enviarWhatsApp(){
    const numero = document.getElementById("input1").value.trim();
    const mensaje = document.getElementById("input2").value.trim();

    if(!numero || ! mensaje){
        alert ("Por favor, complete todos los campos.");
        return
    }
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}