class Animal{
    // constructor es una funcion;
    nombre="falso"
    constructor(nombre,especie){
        this.nombre=nombre;
        //if('string'===typeof(especie))
        this.especie=especie;
    }
    //getters y setters
    //Solo tienen el proposito de leer y modificar el atributo
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie=especie;
    }


    //metodos == funciones
    presentarse(){
        document.write(`Hola soy ${this.nombre} de la especie ${this.especie} <br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre =nuevoNombre;
        let mensaje= `Mi nombre es ${this.nombre} y soy de especie ${this.especie}`;
        return mensaje;
    }
    //Metodos Estaticos
    static saludar(){
        return console.log("hola soy un metodo estatico")
    }

}
console.log(Animal.nombre);
Animal.saludar();

const Animal1=new Animal("Scoobe","perro");
console.log(Animal1);
const Animal2=new Animal("pecas",6854675);
console.log(Animal2,typeof(""));
const Animal3=new Animal();
Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();
console.log(Animal3.cambiarNombre("miel"));
Animal3.nombre=23;
Animal3.setNombre="manchas";
console.log(Animal1.getNombre,typeof(Animal1.getNombre))
Animal3.presentarse();


