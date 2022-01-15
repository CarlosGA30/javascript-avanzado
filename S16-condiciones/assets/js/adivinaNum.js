const numeroMagico=parseInt(Math.random()*99 + 1);
let boton=document.getElementById("btn");

boton.onclick=function(){
    let palabra=document.getElementById("palabra");
    let body=document.getElementById("respuesta");
    body.innerHTML=`<h3>${numeroSecreto(palabra.value)}</h3>`;
}

function numeroSecreto(numero){
    let respuesta;
    distancia=Math.abs(numeroMagico-numero);
    if(distancia==0){
        respuesta="Felicidades campeon encontraste el numero "+numero;
    }else if(distancia<5){
        respuesta="Calienteeeee";
    }else if(distancia<10){
        respuesta="Cliente";
    }else if(distancia<20){
        respuesta="Tibio";
    }else if(distancia<30){
        respuesta="Frio";
    }else{
        respuesta="Congelado";
    }
    return respuesta;
}

