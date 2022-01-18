/*  informacion
    https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
*/
//En algunas notaciones se usa el $ al princio del nombre

//let $titulo=document.getElementById("titulo");
let $titulo=document.querySelector("#titulo");

let $parrafo=document.querySelector("p");
console.log($parrafo.textContent);
let $parrafos=document.querySelectorAll("p");
console.log($parrafos);

let subtitulo=document.createElement("h3");
subtitulo.textContent="subtitulo creado desde js";

console.log($titulo.textContent);
$titulo.textContent='titulo escrito por JS'

//document.body.append(subtitulo);
//Se puede usar un elemento sin extraerlo pero no es recomendable
console.log(par);
par.innerHTML="<h3>Se cambio los datos</h3>"

let contenido=document.querySelector("#contenido");
console.log(contenido.textContent,contenido.innerHTML,contenido.outerHTML);
let contenidoParrafo=document.createElement('p');
contenidoParrafo.textContent="nuevo parrafo";
contenido.append(contenidoParrafo);

document.body.insertAdjacentElement("afterbegin",subtitulo);
contenido.remove();

