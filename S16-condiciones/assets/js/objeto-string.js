let cadena="hola";
console.log(cadena);

let cadena1= new String("Adios");
console.log(cadena1);

console.log(cadena1.toLowerCase().includes("a"));

console.log(cadena1.toLowerCase());
console.log(cadena1.toUpperCase());

console.log(cadena.toUpperCase());

let palabra="hola mundo"
//separa las cadenas en arreglos
//el parametro se elimina y se cortan el arreglo
let arreglo=palabra.split("");
console.log(arreglo);

function invertirPalabra(cadena){
    let arreglo = cadena.split("");
    arreglo.reverse();
    //join une un arreglo a cadena
    //El parametro es agregado entre cada elemento del arreglo   
    let palabrainvertida=arreglo.join("");
    return palabrainvertida
}
console.log(invertirPalabra(palabra));

let boton=document.getElementById("btn");

boton.onclick=function(){
    let palabra=document.getElementById("palabra");
    let body=document.getElementById("respuesta");
    body.innerHTML=`<h3>La palabra fue ${palabra.value}<br>La palabra invertida es ${invertirPalabra(palabra.value)}</h3>`;
}

