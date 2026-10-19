let datos = ['Pepe', 'Angel','Antonio','Daniel','Marta']
console.log(datos[1])
console.log(datos[datos.length-1]) 
console.log(datos.at(1))
datos.push('Miguel')

for(let profe of datos){
    console.log(profe)
}

datos.forEach(function trabaja (profe) { console.log(`${profe} trabaja mucho`)})


let valores = [ -4,6,-2,7]
valores.forEach(function esPosNeg(num){
        if (num >=0)
            console.log(`${num} es positivo`)
        if (num<0)
            console.log (`${num} es negativo`)
})

let nombres = ['Juan','Maria','Luz','Ana Belen','Rosario','Pio']

console.log(
    nombres.filter(
        nombre =>  nombre.length>4    
        )
    )


    