import Miembro from "./miembro.js";
export default class Hijo extends Miembro{
    constructor(nombre , apellidos, moto ="Sin moto"){
        super(nombre, apellidos);
        this._moto = moto;
    }
    get Nombre(){
        return this._nombre;
    }
     get Apellidos(){
        return this._apellidos;
    }
    get Moto(){
        return this._moto;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }
     set Apellidos(apellidos){
        this._apellidos = apellidos;
    }
    set Moto(moto){
        this._moto = moto;
    }
    comer() {
        super.comer();
    }

    cenar() {
        super.cenar();
    }
}
