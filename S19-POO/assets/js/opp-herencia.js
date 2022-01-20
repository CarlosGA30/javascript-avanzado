class Pokemon{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    atacar(){
        return console.log(`${this.nombre} esta atacando`);
    }

}

class Pikachu extends Pokemon {
    constructor(nombre,edad){
        super(nombre,"Eléctrico");
        this.edad=edad;
    }
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando`);
    }

}
class p extends Pokemon,Pikachu{

}

const Pikachu1=new Pikachu("Juan",3);
Pikachu1.atacar();
Pikachu1.evolucionar();
const charmander= new Pokemon("Charmander");
charmander.atacar();
console.log(Pikachu1,typeof(Pikachu1));
const p = new p("p","p");
p.atacar();
p.evolucionar();
