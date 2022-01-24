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
var mrSuma=(operacion,n1,n2)=>{
    const respuesta=document.createElement("h3");
    respuesta.textContent = `La ${operacion} del ${n1} y el ${n2} es ${restar(n1,n2)}`;
    document.body.appendChild(respuesta);
}
class Cal{
    constructor(){
        
    }
    saludar(){
        return "Hola desde Cal";
    }
    
    
}
export {
    sumar,
    multipliacar,
    dividir,
    mostrarResultados,
    mrSuma,
    Cal
}