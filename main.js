

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
    else {
        numero--;
        numerocuotas.innerHTML = numero;
    }    
});
simuladorbtn.addEventListener("click", OperacionResultado)
numero;
function OperacionResultado () {
    credit = input1.value;
    numero;
    if (credit <1500 ) {
        interes = 5
        interest = credit * 0.05
    } else {
        interes = 3.5
        interest = credit * 0.035
    }
    valorCuota = credit / numero ;
    Swal.fire({
        title: '<strong><u>Tu credito</u></strong>',
        icon: 'info',
        html:
          'Tu credito de $' + credit + ' sera divido en ' + numero +' cuotas. Cada cuota tendra un valor de $' + valorCuota + ' mas $' + interest.toFixed(2) + ', equivalente al ' + interes + '% de intereses.',
        
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    /*resultado.innerHTML = "Tu credito de $" + credit + " sera divido en " + numero +" cuotas. Cada cuota tendra un valor de $" + valorCuota + " mas $" + interest.toFixed(2) + ", equivalente al " + interes + "% de intereses.";*/
}