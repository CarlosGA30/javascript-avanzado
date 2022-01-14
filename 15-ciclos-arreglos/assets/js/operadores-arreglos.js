let numeros=new Array();
numeros=[1,2,5,7,89,3,24];
document.write("<br><h2>con for each</h2><br>");
numeros.forEach((num,i)=>document.write(`num  en su campo ${i} = ${num}<br>`)
);

numeros2=numeros.map(function(ele){
    return ele*2;
});
numeros3=numeros.map(num=>(num%2==0)? num=num:num=num+1);

document.write(`<br><h2>con depues de map ${numeros2} - ${numeros2.length} y ${numeros3}</h2><br>`);

let numerosPares=numeros.filter(ele=>{
    console.log(ele%2==0);
    return ele%2==0;
});
document.write(`<br><h2>Los numeros pares son ${numeros.includes(3)}</h2><br>`);
document.write(`<br><h2>Los numeros pares son ${numerosPares}</h2><br>`);

let frutas=['mango','uva','piña','mandarina','manzana','aguacate','sandia'];

let frutasConI=frutas.filter(fruta=>
    {
        return fruta.toUpperCase()[0].includes('M');
    });
document.write(`<br><h2>Los frutas ${frutas} y frutas con i ${frutasConI}</h2><br>`);

document.write(`<br><h2>Los numeros con sort ${numeros.sort()} y frutas con i ${numeros}</h2><br>`);
document.write(`<br><h2>Los numeros con sort ${numeros.reverse()} y frutas con i ${numeros}</h2><br>`);

let primerafruta=frutas.find(fruta=>
    {
        return fruta.toUpperCase()[0].includes('P');
    });
document.write(`<br><h2>Los frutas ${frutas} y la primera fruta con p es ${primerafruta}</h2><br>`);
