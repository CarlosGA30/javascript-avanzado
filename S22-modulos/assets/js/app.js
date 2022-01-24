import {sumar,mostrarResultados,multipliacar,mrSuma, Cal} from "./calculadora.js";

console.log(sumar(4,6));

mostrarResultados('multiplicacion', 4,6,multipliacar(4,6));

mrSuma("s",7,3);
let cal= new Cal();
console.log(cal.saludar());