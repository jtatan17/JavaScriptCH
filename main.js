
let inicio = prompt("Simulador de credito\n Para solicitar un credito escriba 1 para terminar precione 2");
while (inicio != 2 ) {
    let credit = prompt("Tenga en cuenta que si el credito es menor a $1500 tendra una tasa de interes del 5%, mientras que si el credito es mayor a $1500 tendra una tasa de interes del 3.5%.\n Ingrese el valor del credito a pedir entre $100 y $10000");

    let numeroCuotas = prompt("Ingrese el numero de cuotas en las que quiere dividir el credito\n (Sugerencia, dividir el credito en 12, 36 o 72 cuotas)");
    function simuladorMenor (valor, cuotas){
        let valorCuota = valor / cuotas ;
        let interest = valorCuota * 0.5;
        let result = alert("Tu credito de $" + credit + " sera divido en " + numeroCuotas + " cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest + ", equivalente al 5% de intereses.")
        return result;
    }
    function simuladorMayor (valor, cuotas){
        let valorCuota = valor / cuotas ;
        let interest = valorCuota * 0.35;
        let result = alert("Tu credito de $" + credit + " sera divido en " + numeroCuotas + " cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest + ", equivalente al 3.5% de intereses.")
        return result;
    }
    
    if (credit < 1500 ) {
        simuladorMenor(credit, numeroCuotas);
    } else {
        simuladorMayor(credit, numeroCuotas);
    }
    
    inicio = prompt("Simulador de credito\n Para solicitar otro credito escriba 1 para terminar precione 2");
}


