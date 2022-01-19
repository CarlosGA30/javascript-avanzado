/**
 * codigo sincrono
 */

let variableSincrona;
variableSincrona=10*3;
console.log(variableSincrona);

let variableAsincrona;
setTimeout(()=>{
    variableAsincrona=11*30;
},2000);
console.log(variableAsincrona);
