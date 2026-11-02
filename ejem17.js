function calcularHipotenusa(cateto1, cateto2) {
   
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    return hipotenusa;
}

const catetoA = 3;
const catetoB = 4;
const resultado = calcularHipotenusa(catetoA, catetoB);

console.log(`La hipotenusa para los catetos ${catetoA} y ${catetoB} es: ${resultado}`);