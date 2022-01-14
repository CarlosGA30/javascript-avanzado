let titulo=document.getElementById("titulo");
console.log(titulo);

titulo.textContent="Escrito desde JAVASCRIPT";

let parrafos=document.getElementsByTagName("p");
console.log(parrafos);

parrafos[0].textContent="se cambio con JS"


parrafos[1].textContent+=" se añadio con JS";
let mail=document.getElementById("correo");
let password=document.getElementById("pass");

function getInformacion(){
    console.log(mail.value);
    console.log(pass.value);
}

