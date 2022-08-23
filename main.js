

let botonsuma = document.getElementById("suma");
let botonresta = document.getElementById("resta");
let numerocuotas = document.getElementById("elemntocontador");
let numero = 0;
let input1 = document.getElementById("moneyamount");
let simuladorbtn = document.getElementById("Simularbtn");
let resultado = document.getElementById("resultado");
let credit = input1.value;

botonsuma.addEventListener("click", () =>{
    numero++;
    numerocuotas.innerHTML = numero;
});
botonresta.addEventListener("click", () =>{

    if(numero==0){}
    else {numero--;
        numerocuotas.innerHTML = numero;
    }
});
simuladorbtn.addEventListener("click", OperacionResultado)

numero;

function OperacionResultado () {
    credit = input1.value;
    let numerocuotas = numero;
    if (credit <1500 ) {
        interes = 5
        interest = credit * 0.05
    } else {
        interes = 3.5
        interest = credit * 0.035
    }
    valorCuota = credit / numerocuotas ;
    resultado.innerHTML = "Tu credito de $" + credit + " sera divido en 6 cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest.toFixed(2) + ", equivalente al " + interes + "% de intereses.";
}



/*  

let credit = prompt("Simulador de credito\n Tenga en cuenta que si el credito es menor a $1500 tendra una tasa de interes del 5%, mientras que si el credito es mayor a $1500 tendra una tasa de interes del 3.5%.\n Ingrese el valor del credito a pedir entre $100 y $10000");


let resultado1 = document.getElementById("resultado1");    

let boton1 = document.getElementById("boton1");
boton1.addEventListener("click",respuestaclick1)


function respuestaclick1(){
    if (credit <1500 ) {
        interes = 5
        interest = credit * 0.05
    } else {
        interes = 3.5
        interest = credit * 0.035
    }
    valorCuota = credit / 6 ;
    resultado1.innerHTML = "Tu credito de $" + credit + " sera divido en 6 cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest.toFixed(2) + ", equivalente al " + interes + "% de intereses.";
}
*/