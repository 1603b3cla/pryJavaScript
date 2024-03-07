class persona {
    nombre = "Ramiro";
    edad;
    sexo;
    RFC;
    saludar() {
        console.log(`Hola ${this.nombre}`);

    }
}
const objPersona = new persona();
objPersona.saludar();


class Docente {
    constructor(nom, edad, gender) {
        this.nombe = nom;
        this.edad = edad;
        this.genero = gender;
    }

}

const objDocente1 = new Docente("Rodolfo", 45, "M");
console.log(objDocente1);



class Medico {#
    nombre;#
    especialidad;#
    area;#
    carrera;

    constructor() {
        this.#nombre = "Edgar";
        this.#especialidad = "Dentista";
        this.#area = "Infantil";
        this.#carrera = "Medico general"
    }
    getInformacion() {
        return this.#nombre + " " + this.#especialidad;
    }
}
const objMedico = new Medico();
console.log(objMedico);