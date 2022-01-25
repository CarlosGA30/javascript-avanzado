const sumar=(n1,n2)=>{
    return n1+n2;
}
const restar=(n1,n2)=>{
    return n1-n2;
}
const multipliacar=(n1,n2)=>{
    return n1*n2;
}
const dividir=(n1,n2)=>{
    return n1/n2;
}
let mostrarResultados = (operacion,n1,n2,resultado)=>{
    const respuesta=document.createElement("h3");
    respuesta.textContent = `La ${operacion} del ${n1} y el ${n2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

module.exports={
    sumar,
    restar,
    multipliacar,
    dividir,
    mostrarResultados,
}