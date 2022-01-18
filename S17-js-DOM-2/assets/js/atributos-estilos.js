let $titulo=document.querySelector("#titulo");
let $texto=document.querySelector(".texto");
$texto.id="texto";
//$texto.style="color:red";

$texto.className += " bg-purple";
$texto.className += " h3";
$texto.classList.add("text-center");
$texto.classList.remove("bg-purple");
