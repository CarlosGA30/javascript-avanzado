const numeros=[];
for (let i = 0; i < 20; i++) {
    numeros.push(parseInt((Math.random()*5)+5));
}
document.write(`<br>El areglo tiene los numeros ${numeros}<br>`);
let suma=0;
numeros.forEach(ele=>suma+=ele);
document.write(`<br>El areglo tiene los numeros ${numeros} y la suma es ${suma}<br>`);
let promedio=suma/numeros.length
document.write(`<br>El promedio de ${numeros} es ${promedio}<br>`);