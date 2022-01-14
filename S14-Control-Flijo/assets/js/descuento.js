

function total(tipo,precio){
    descuento=0;
    switch(tipo){
        case "bronce":
            descuento=0.05;
            break;
        case "plata":
            descuento=0.1;
            break;
        case "oro":
            descuento=0.2;
            break;
        case "platinum":
            descuento=0.25;
            break;
        default:
            document.write("cupon invalido");
            break;
    }
    return precio-(precio*descuento);
}
function escribirRes(cupon){
    let inPrecio=document.getElementById("precio");
    let precio=inPrecio.value;
    let res=document.getElementById("resultado");
    res.innerHTML=(`el total a pagar es ${total(cupon,precio)} el precio es ${precio}`);
    console.log(cupon);
}

