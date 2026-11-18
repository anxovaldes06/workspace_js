
function Alumno({ nombre, edad }) {
  return (
    <div>
      <h2 class="text-blue-700">Soy un alumno</h2>
      <p>Mi nombre es {nombre}</p>
      <p>Mi edad es {edad} años</p>
    </div>
  )
}

export default Alumno