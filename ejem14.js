class Persona{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad

           
    }
}
    class Alumno extends Persona{
        static maxNumeroAlumnos = 7 
        #notaPorDefecto = 4
        constructor(nombre,edad,notas){
            super(nombre,edad)
            this.notas=notas+this.#notaPorDefecto

        }


    }

    let estudiante1 = new Alumno("Pedrito",25,7)
    let estudiante2 = new Alumno('Alfredito',25,7)
    estudiante1.maxNumeroAlumnos = 55
    console.log(estudiante2.maxNumeroAlumnos)
   // estudiante1.#notaPorDefecto no se puede, atributo privado 

   console.log(estudiante1 instanceof Persona)
   console.log(estudiante2 instanceof Alumno) 
   console.log(estudiante1 instanceof Array) //false
   console.log(estudiante1 instanceof Object)

