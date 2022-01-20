class Carro{
    constructor(marca, color, modelo, velocidad,numeroPuertas){
        this.marca=marca;
        this.color=color;
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.numeroPuertas=numeroPuertas;
    }

    acelerar(){
        this.velocidad++;
    } 
    frenar(){
        this.velocidad=0;
    } 
    reversa(){
        this.velocidad--;
    }
    toString(){
        return `El carro es ${this.marca} de color ${this.color} su velocidad es ${this.velocidad}`;
    }

}

const carro= new Carro("Volvo","Azul","2022",0,4);