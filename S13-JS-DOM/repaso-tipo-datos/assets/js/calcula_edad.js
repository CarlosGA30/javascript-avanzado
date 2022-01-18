let edad=document.getElementById("ed");
let btn=document.getElementById("btn");
btn.onclick=function(){
    edad.innerHTML+='<label for="fecha">año nacimiento</label><input id="fecha" type="date" name="fecha"><button id="btn_edad" onclick="calEdad()">Tu edad es</button>';
    
}
function calEdad(){
    actual=new Date();
    nc=document.getElementById("fecha");
    console.log(nc.value);
    naci=new Date(nc.value);
    console.log(naci.getMonth());
    let edad_r=document.getElementById("edad");
    edad_r.innerHTML+=(actual.getYear()-naci.getYear());
}


