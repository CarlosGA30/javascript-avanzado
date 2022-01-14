let numeros=new Array();
numeros=[1,2,5,7,89,3,24];

document.write(numeros);

document.write("<br><h2>con for y length</h2><br>");
for (let i = 0; i < numeros.length; i+=2) {
    document.write(`numeros  en su campo ${i} = ${numeros[i]}<br>`)
    
}
