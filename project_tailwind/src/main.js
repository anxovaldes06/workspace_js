import './style.css'

document.querySelector('#app').innerHTML = `
    <h1 class="text-red-500 text-2xl">titulo</h1>
    <div class="text-fuchsia-300 text-xs">Prueba</div>
    <div class="bg-amber-100 text-center">centro</div>
    <div class="bg-amber-600 text-right">derecho</div>
    <div class="italic">Cursiva</div>
    <div class="font-bold">Negrita</div>
    <div class="m-4 p-5 bg-blue-300">CEBEM</div>
    <div class="text-white bg-linear-to-r from-orange-400 to-orange-600">Que nadie cuente con nosotros, 
    que nadie cuente conmigo para estar en contra de la violencia machista</div>
    <div class="font-cebem border-b-4 border-b-blue-500 border-t-4 border-t-anxo">ANTONIO RECIO, 
    MARISCOS AL MEJOR PRECIO</div>
    <div class="bg-green-500 sm:bg-amber-400 md:bg-blue-500 lg:bg-green-700">Color Anxo</div>
    <nav class="flex flex-col sm:flex-row gap-4 mx-4">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Contact</a>
    </nav>



`