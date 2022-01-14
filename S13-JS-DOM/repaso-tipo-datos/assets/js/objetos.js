/*
let miObjeto={
 //pares de clave : valor
}
*/

let persona={
    nombre:"carlos",
    edad:27,
    direccion:{
        calle:"las rosas",
        numero:"3",
        ciudad:"CDMX",
        cp:"16000"
     },
    numero:[214314,6467],
    dimaDatos:function(){
        console.log(this)
    }
    

}
let pan={
    nombre:"dona",
    sabor:"chocolate",
    tipo:"reposteria",
    precio:23.50,


}
console.log(persona,typeof(persona));