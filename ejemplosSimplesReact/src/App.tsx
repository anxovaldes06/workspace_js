
import './App.css'
import Alumno from './components/Alumno'

function App() {
  return (
    <main>
      <h1>Bienvenido</h1>
      <Alumno nombre="Juan" edad="20" />
      <Alumno nombre="María" edad="22" />
      <Alumno nombre="Pedro" edad="19" />
    </main>
  )
}
export default App
