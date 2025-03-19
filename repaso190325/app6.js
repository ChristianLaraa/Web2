const gato = {
    nombre: 'Wilson',
    duerme: true,
    edad: 6,
    enemigos: ["Solovino", "Palomas"]
}

gato.color='Negro';

//notaciones con corchete -> recorren los elementos
console.log(gato.nombre);
console.log(gato.enemigos[1]);
console.log(gato.color);

    gato.edad = 7;
console.log(gato.edad)

console.log(gato['nombre']);

console.log(gato);

delete gato.duerme;

console.log(gato);