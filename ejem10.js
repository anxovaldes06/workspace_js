let producto = {
    nombre : 'Naranja',
    precio : 5,

}

for(let propiedad in producto){
    console.log(propiedad + ' = ' + producto[propiedad]);
}

let nombresPersona = ['Juan', 'Pedro', 'Maria', 'Luis'];
for (let index in nombresPersona){
    console.log(index + ' = ' + nombresPersona[index]);
}

for (let persona of nombresPersona){
    console.log(persona);
}