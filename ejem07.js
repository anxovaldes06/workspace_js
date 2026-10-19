function saludar(nombre = "Anonimo"){
    console.log(`Hola ${nombre} , que tal estás?`)

}
saludar('Paco')
saludar()

function miFuncion(dato){}

miFuncion(5)
miFuncion(true)
miFuncion(5.2)
miFuncion("Antonio")
miFuncion({nombre: "Paco", edad : 36 , altura : 1.9})
miFuncion(function(a){ return a*2})