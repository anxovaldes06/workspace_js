let persona1 = {

    nombre: "Pepe",
    edad: 30,
    esCasado: false

}

console.log(persona1.edad)
console.log(persona1["edad"])

persona1.esCasado = true
console.log(persona1)

persona1.altura = 1.8
console.table(persona1)

delete persona1.altura

let coche1 = {

        marca : 'Citroen',
        estado : 'parado',
        caracteristicas : {
            elevalunas:true,
            pintura_metalizada:true,
            num_puertas : 4

        },
        arrancar : function(){
            this.estado = 'arrancado'
        }
}

console.log(coche1.estado)
coche1.arrancar()
console.log(coche1.estado)
console.log(coche1.caracteristicas['num_puertas'])


let producto1 = {
    nombre: 'Peras',
    info: {
        caducidad : '01/10/2027',
        peso : 3,
        
    }

}
let producto2 = producto1
producto1.nombre = 'Jose'
console.log(producto1.nombre)
console.log(producto2.nombre)



let producto3 = { ... producto1 }
producto3.nombre = 'fresa'

console.log(producto1.nombre)
console.log(producto2.nombre)
console.log(producto3.nombre)