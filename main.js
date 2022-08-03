
const names = ["Posicion 0","Sebastian", "Juan","Daniel","Jorge","Ricardo","Felipe","Juan","Alejandro","Camilo","Gabriel"];

let inicio = prompt("En una carrera participaron Jorge, Alejandro, Ricardo, Sebastian, Daniel, Felipe, Juan, Camilo, Gabriel y Juan. Por medio de los alerts puedes saber en que posicion llego cada uno. Ingrese 1 para saber en que posicion llego alguno de los participantes o ingrese 2 para terminar")
while (inicio != 2 ) {

    function localizarnombre (nombre) {
        const namesLocation = names.indexOf(nombre);
        return namesLocation;
    }
    let pregunta = prompt("Lista de nombres: Jorge, Alejandro, Ricardo, Sebastian, Daniel, Felipe, Juan, Camilo, Gabriel y Juan.Ingrese el nombe de la persona de la cual quiere saber en que posicion llego(escribir exactamente el nombre)");
    alert(pregunta + " llego en el lugar numero " + (localizarnombre(pregunta)));
    inicio = prompt("Ingrese 1 para continuar averiguando posiciones o ingrese 2 para terminar")
} 