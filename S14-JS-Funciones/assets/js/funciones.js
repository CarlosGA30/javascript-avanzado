function suma(numero1,numero2){
 return numero1+numero2;
}
let n1= parseInt( prompt("numero 1"));
let n2= parseInt( prompt("numero 2"));

document.write('<h1>'+`la suma de ${n1} y ${n2} es = `+`${suma(n1,n2)}`+'</h1>');
restar(n1,n2);

function restar(n1,n2){
    //Template string
    document.write(`<br>la resta de ${n1} y ${n2} es ${n1-n2}<br>`);
}

document.write('<h1>'+`la suma de ${n1} y ${n2} es = `+`${suma2}`+'</h1>');

