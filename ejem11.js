try{
let division = 5/0
if(num<0)
    throw new Exception('El número no puede ser negativo');
}catch(error){
    console.log('Error: ' + error.message);
}finally{
    console.log('Se ejecuta siempre');
}