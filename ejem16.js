const valores = [ 3,5,21,6,9,8]
const pares = valores.filter( v => v % 2 == 0 )
console.log(pares)

const enteros = [2,6,1]
const cuadrado = enteros.map(e => Math.pow(e,2))
console.log(cuadrado)

const nombres = ["antonio","pepe","daniel"]
const nombresMayus = nombres.map(nom => nom.toUpperCase())
console.log(nombresMayus)

const datos = [ 6,-2,7,-7,5]
const posDuplicado = datos.filter( dat => dat > 0 )
                          .map( dat  =>  dat * 2)
console.log(posDuplicado)

const hobbies  = ["cantar","comer","dormir","programar"]
const mostrarEtiquetas = hobbies.map( hob => `<li> ${hob} </li>`)
console.log(mostrarEtiquetas)

const nums = [2,5,1,2]
const sumarTotal = nums.reduce((cont,num) => cont+num , 0)
console.log(sumarTotal) 

const puntos = [ 2 , 5 , 4 , 8]
puntos.sort((a,b) => a - b) //menor a mayor , b - a mayor a menor
console.log(puntos)

const valores_alumnos = [ 6, 7, 2, 3, 1]
const subconjunto = valores_alumnos.slice(0,2)
console.log(subconjunto)

const valores_profesores = [ 5 ,6 ,8 ,2 ,3]
valores_profesores.splice(1,2,'a','b')
console.log(valores_profesores)

const nombres_alumnos = [ 'Maria', 'Pepa', 'Rosario', 'Charo']
const index = nombres_alumnos.indexOf('Pepa')
console.log(index)

const cadenaUnida = nombres_alumnos.join(' -+- ')
console.log(cadenaUnida)


const notas_globales = ["supenso","aprobado","suspenso"]
for(let key of notas_globales.keys()){
    console.log(key)
}
for(let [key, valor] of notas_globales.entries() ){
    console.log(key + " " + valor)
}

const datos2 = [ 'Antonio' , 20]
const nombre = datos2[0]
const edad = datos2[1]              //mal
console.log(nombre + " " + edad)

const [nombre2,edad2] = datos2
console.log(nombre2 + " " +edad2)       //bien

const numeros = [3,5,7,6,5,4]
const[primero,segundo, ... resto] = numeros
console.log(resto)

const sumar = resto.reduce((cont, a) => cont+a , 0)
console.log(sumar)
