class Persona {#
    nombre;#
    curp;#
    edad;
    constructor() {
        this.#nombre = "";
        this.#curp = "CAGE010316HOCLRDA9";
        this.#edad = 0;
    }
    set Nombre(nombre) {
        this.#nombre = nombre;
    }
    set edad(nombre) {
        this.#edad = edad;
    }
    get Nombre() {
        return this.#nombre
    }
    get edad() {
        return this.#edad
    }

    calcularEdada() {
        //CAGE010316HOCLRDA9
        const signo = this.#curp.charAt(16);
        let epoca = 2000;
        if ("123456789".indexOf(siglo) >= 0) {
            epoca = 1900;
        }
        const anioNacimiento = epoca + parseInt(this.#curp.substring(4, 6));
        const anioActual = new Date().getFullYear();
        this.#edad = anioActual - anioNacimiento;
    }
}
// Crear una instancia de Persona
const persona = new Persona();

// Establecer el nombre y calcular la edad
persona.Nombre = "Juan";
persona.calcularEdad();

// Mostrar los datos
console.log("Nombre:", persona.Nombre);
console.log("Edad:", persona.Edad);