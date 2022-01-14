let nombre="carlos";
let edad=27;
let tieneTrabajo=false;
let variableNull=null;
let variableUndefined;
let dat=document.getElementsByTagName("body");

console.log("nombre es de tipo "+typeof(nombre)+" y tiene "+nombre);
console.log("edad es de tipo "+typeof(edad)+" y tiene "+edad);
console.log("tieneTrabajo es de tipo "+typeof(tieneTrabajo)+" y tiene "+tieneTrabajo);
console.log("variableNull es de tipo "+typeof(variableNull)+" y tiene "+variableNull);
console.log("variableUndefined es de tipo "+typeof(variableUndefined)+" y tiene "+variableUndefined);
console.log("dat es de tipo "+typeof(dat)+" y tiene "+dat+"  "+ (dat[0]));
console.log(dat[0]=='[object HTMLBodyElement]')
console.log(variableNull==variableUndefined);
console.log(variableNull===variableUndefined);

console.log('1'==1);
console.log('1'===1);

