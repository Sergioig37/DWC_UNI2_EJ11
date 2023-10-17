import Miembro from "./miembro.js";
export default class Padre extends Miembro{
    constructor(nombre, apellidos, coche){
        super(nombre, apellidos);

        this._coche = coche;
    }
    get Nombre(){
        return this._nombre;
    }
     get Apellidos(){
        return this._apellidos;
    }
    get Coche(){
        return this._coche;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }
     set Apellidos(apellidos){
        this._apellidos = apellidos;
    }
    set Coche(coche){
        this._coche = coche;
    }
    comer() {
        super.comer();
            console.log("Estoy comiendo huevos");
        }
    

    cenar() {
        super.cenar();
        console.log("Estoy cenando huevos");
    }

}


