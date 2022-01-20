class Animalito{
    constructor(nombre,edad,especie,revisado){
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.enfermo=false;
        this.revisado=revisado;
        

    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} soy un ${this.especie} y tengo ${this.edad} años, ${this.revisado? "ya":"no"} me han revisado pero ${this.enfermo? "si":"no"} estoy enfermo`);
    }

}
class Veterinario{
    constructor(){
        this.cantidadPacientes=0;
        this.pacientesRevisados=0;
        this.listaPacientes=[];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes++;
        let mensaje="Paciente Agregado <br>";
        return document.write(mensaje);
    }
    modificarPacientesRevisados(){
        return this.pacientesRevisados++;
    }
    revisarPäciente(paciente){
        if(paciente.revisado){
            document.write("<br> El paciente "+paciente.nombre+" ya habia sido checado <br>");
        }else{
            paciente.revisado=true;
            //this.pacientesRevisados++;
            this.modificarPacientesRevisados();
            document.write("<br> El paciente "+paciente.nombre+" ya esta revisado <br>");
        
        }

    }
    mostrarLista(){
        for (let i = 0; i < this.listaPacientes.length; i++) {
            document.write(this.listaPacientes[i].nombre+"<br>");
            
        }
        document.write(`<br> la cantidad de pacienetes es :${this.cantidadPacientes} <br>la cantidad de pacienetes revisados es :${this.pacientesRevisados} <br>`);
    }
}

const Animalito1=new Animalito("Manchas",5,"Perro",true);
const Animalito2=new Animalito("Galletas",2,"Gato",false);
console.log(Animalito1);
const VeterinarioPanchito=new Veterinario();

VeterinarioPanchito.agregarPaciente(Animalito1);
VeterinarioPanchito.agregarPaciente(Animalito2);
console.log(VeterinarioPanchito.listaPacientes);
VeterinarioPanchito.mostrarLista();

VeterinarioPanchito.revisarPäciente(Animalito2);
VeterinarioPanchito.revisarPäciente(Animalito2);
VeterinarioPanchito.mostrarLista();


//Operador de corto circuito
//let operador=

x= 1 >> 4;
console.log(x);


