
function Persona(nombre,edad){
    this.nombre=nombre
    this.edad=edad
    
    this.saludar = function(){
        console.log('Hola soy ' +this.nombre+ ' y tengo ' +this.edad+ ' anios')
    }
}

let Manolo = new Persona('Manolito',22)
Manolo.saludar()
Persona.prototype.gritar = function (){
    console.log('HOLAAAA SOOYY ' +this.nombre)
}
