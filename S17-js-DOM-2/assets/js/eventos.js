
let $titulo=document.querySelector("#titulo");
let $mensaje=document.querySelector("#mensaje");
let $btnMensaje=document.querySelector("#btnMensaje");
let $span = document.querySelector("span");
$btnMensaje.addEventListener('click',()=>{
    console.log("no me presiones");
});

$mensaje.addEventListener("keyup",(e,a,i)=>{
    console.log(e,a,i);
    console.log(e.target.value);
    if(e.target.value.length<3){
        $span.classList.remove("hide");
        $span.classList.add("error");
    }else{
        $span.classList.add("hide");
        $span.classList.remove("error");
    }


});
