class Medico {#
    nombre;#
    especialidad;#
    area;#
    calidadServicio;

    constructor(especialidad, calidad) {
        this.#nombre = "Edgar"
        this.#especialidad = especialidad;
        this.#area = "Tercera edad"
        this.#calidadServicio = "calidadServicio"
    }

    get nombre() {
        return this.#nombre;

    }
    get especialidad() {
        return this.#especialidad;
    }

    get calidadDeServicio() {
        return "🦷".repeat(this.#calidadServicio);

    }
    set area(area) {
        return this.#area;

    }
}

const objMedico = new Medico("Odontologo", 5);
console.log(objMedico.nombre);
console.log(`La calidad el servicio es:${objMedico.calidadDeServicio}`)