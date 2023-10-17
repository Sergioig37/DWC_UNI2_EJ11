import Miembro from "./miembro.js";
import Hijo from "./hijo.js";
import Padre from "./padre.js";


var hijo1 = new Hijo("Sebastián", "García", null);
var padre1 = new Padre("Juan", "Gutierrez", "MBW");

console.log(padre1.Coche);
console.log(hijo1.Moto);
console.log(padre1.cenar());
console.log(padre1.comer());
console.log(hijo1.cenar());
console.log(hijo1.comer());

