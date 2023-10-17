class Familia {
    constructor(domicilio, renta = 0, miembros) {
        this._domicilio = domicilio;
        this._renta = renta;
        this._miembros = miembros;
    }
    get Domicilio() {
        return this._domicilio;
    }
    get Renta() {
        return this._renta;
    }
    get Miembros() {
        return this._miembros;
    }

    set Domicilio(domicilio) {
        this._domicilio = domicilio;
    }
    set Renta(renta) {
        this._renta = renta;
    }
    set Miembros(miembros) {
        this._miembros = miembros;
    }

}