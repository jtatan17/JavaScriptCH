
let inicio = prompt("Ingrese 1 para calcular las cuotas de su credito o ingrese 2 para terminar")
while (inicio != 2 ) {
    function calcular (valor, cuotas) {
        let valorcuota = valor / cuotas ;
        let montocuota = "El valor que se debera pagar por " + numerodecuotas + " meses es de " + valorcuota + " $";
        return montocuota;
       }
       let valordeuda = prompt("Ingrese el valor del credito");
       let numerodecuotas = prompt("Ingrese el numero de cuotas a dividir la deuda");
       alert(calcular(valordeuda, numerodecuotas));
    inicio = prompt("Ingrese 1 para calcular las cuotas de su credito o ingrese 2 para terminar")
}