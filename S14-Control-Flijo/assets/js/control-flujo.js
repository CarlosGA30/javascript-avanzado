
let edad=17;

if(edad>=18){
    console-log();
}else{
    console.log();
}
//operador ternario
/**
 (condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso
 */

/*
(edad>=17)? console.log("mayor de edad"):console.log("menor de edad");

*/
let edad1=17;
let pregunta=(edad1>=17)
? "mayor de edad"
:"menor de edad";
console.log(pregunta);

dia=1;

if(dia===6){
    console.log("sabado");

}else if(dia===0 ){
    
    console.log("desde if domingo");
}else if(dia===1){
    
    console.log("desde if lunes");
}else if(dia===2){
    console.log("desde if martes");
}else if(dia===3){
    
    console.log("desde if miercoles");
}else if(dia===4){
    
    console.log("desde if jueves");
}else if(dia===5){
    console.log("desde if viernes");
}else{
    console.log("desde if no es un dia de la semana");
}
/**
 * switch(variable_a_evaluar){
 *  case valor:
 *      -codigo
 *  case valor:
 *      -codigo
 *  default:
 *      -codigo
 * }
 */
switch(dia){
    case 0:
        console.log("desde case domingo");
        break;
    case 1:console.log("desde case lunes");
        break;
    case 2:
        console.log("desde case martes");
        break;
    case 3:
        console.log("desde case miercoles");
        break;
    case 4:
        console.log("desde case jueves");
        break;
    case 5:
        console.log("desde case viernes");
        break;
    case 6:
        console.log("desde case sabado");
        break;
    default:
        console.log("desde case no es un dia de la semana");
        break;

}

