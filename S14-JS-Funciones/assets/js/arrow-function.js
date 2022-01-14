

const sumar= (numero1,numero2)=>{
    return numero1+numero2;
}
let n1= parseInt( prompt("numero 1"));
let n2= parseInt( prompt("numero 2"));

sm=sumar;
document.write('<h1>'+`la suma de ${n1} y ${n2} es = `+`${sumar(n1,n2)}`+`con sm da ${sm(n1,n2)}`+'</h1>');
