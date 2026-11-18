let alumnos = [
    {nombre : 'manolo', nota:9},
    {nombre : 'paco' , nota:7},
    {nombre : 'ana', nota:10}

]

alumnos.push({nombre:'roberto',nota : 2.5})
console.log(alumnos.at(2).nota)
console.log(alumnos.length)

function numAprobados (alumnos){
    let contador = 0;
    for ( let alumno of alumnos){
        if (alumno.nota >= 4)
            contador ++
    }
    return contador
}
console.log(numAprobados(alumnos))
console.log(
    alumnos.filter( 
        alumno =>   alumno.nota>=4 
       
           
        ).length

    )


    function notaMedia(alumno){
        let suma = 0
            for (  alumno of alumnos){
               suma += alumno.nota
            }
            return suma / alumnos.length
    }
    console.log(notaMedia(alumnos))


const media = alumnos.reduce((total,alumno) => total + alumno.nota, 0) / alumnos.length
console.log(media)



let productos = [
    {nombre : 'tele', precio:60 , categoria : "electrico"},
    {nombre : 'telefono' , precio:50, categoria : "electrico"},
    {nombre : 'radio', precio:20 , categoria : "tecnologico"}
]

const precioproductElectMayor30 = productos.filter(producto => producto.precio >= 30 && producto.categoria == "electrico" )
.map(producto => producto.precio)
.reduce((acumulador,precioActual) => acumulador+precioActual , 0)
console.log(productElectMayor30)