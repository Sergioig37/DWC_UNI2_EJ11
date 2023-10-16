class Miembro {
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

    comer(){
        console.log("Estoy comiendo");
    }

    cenar(){
        console.log("Estoy cenando");
    }
}

var pol = new Miembro("Sergio", "Iglesias");

console.log(pol.Nombre);
console.log(pol.Apellidos);
pol.comer();
