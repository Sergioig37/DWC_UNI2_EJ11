export default class Miembro {
    constructor(nombre = "-", apellidos = "-") {
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

     get Nombre() {
        return this._nombre;
    }
     get Apellidos() {
        return this._apellidos;
    }

    set Nombre(nombre) {
        this._nombre = nombre;
    }
    set Apellidos(apellidos) {
        this._nombre = nombre;
    }

    comer() {
        console.log("Estoy comiendo");
    }

    cenar() {
        console.log("Estoy cenando");
    }
}

