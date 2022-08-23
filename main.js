

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
botonresta.addEventListener("click", () =>{

    if(numero==0){}
    else {numero--;
        numerocuotas.innerHTML = numero;
    }
});

simuladorbtn.addEventListener("click", OperacionResultado)

function OperacionResultado () {
    if (credit <1500 ) {
        interes = 5
        interest = credit * 0.05
    } else {
        interes = 3.5
        interest = credit * 0.035
    }
    valorCuota = credit / numero ;
    resultado.innerHTML = "Tu credito de $" + credit + " sera divido en 6 cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest.toFixed(2) + ", equivalente al " + interes + "% de intereses.";
}



/*  

let credit = prompt("Simulador de credito\n Tenga en cuenta que si el credito es menor a $1500 tendra una tasa de interes del 5%, mientras que si el credito es mayor a $1500 tendra una tasa de interes del 3.5%.\n Ingrese el valor del credito a pedir entre $100 y $10000");


let resultado1 = document.getElementById("resultado1");    
let resultado2 = document.getElementById("resultado2");    
let resultado3 = document.getElementById("resultado3");    

let boton1 = document.getElementById("boton1");
boton1.addEventListener("click",respuestaclick1)
let boton2 = document.getElementById("boton2");
boton2.addEventListener("click",respuestaclick2)
let boton3 = document.getElementById("boton3");
boton3.addEventListener("click",respuestaclick3)

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
function respuestaclick2(){
    if (credit <1500 ) {
        interes = 5
        interest = credit * 0.05
    } else {
        interes = 3.5
        interest = credit * 0.035
    }
    valorCuota = credit / 12 ;
    resultado2.innerHTML = "Tu credito de $" + credit + " sera divido en 12 cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest.toFixed(2) + ", equivalente al " + interes + "% de intereses.";
}

function respuestaclick3(){
    if (credit <1500 ) {
        interes = 5
        interest = credit * 0.05
    } else {
        interes = 3.5
        interest = credit * 0.035
    }
    valorCuota = credit / 24 ;
    resultado3.innerHTML = "Tu credito de $" + credit + " sera divido en 24 cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest.toFixed(2) + ", equivalente al" + interes + "% de intereses.";
}

*/