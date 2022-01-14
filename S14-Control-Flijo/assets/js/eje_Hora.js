const saludo= hora =>{
    if(hora>=6 && hora<=11){
        mensaje="buenos dias";
    }else if(hora>=19 && hora<=23){
        mensaje="Buenas noches";
    }else if(hora>=12 && hora<=18){
        mensaje="Buenas tardes";
    }else if(hora>=0 && hora<=5){
        mensaje="Dejame dormir";
    }else{
        mensaje="Hora invalida"
    }
    return mensaje
}

hr=document.getElementById("hora");
hora=parseInt(hr.value);

document.write("<h1>"+saludo(hora)+"</h1>")