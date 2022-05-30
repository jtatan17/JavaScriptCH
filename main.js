/*Caundo ingrese un numero menor a o igual a 50
*/
let number;

number = Number(prompt("Ingrese un numero menor a 50 y la consola mostrara el numero de veces deseado"));
if (number <= 50){
for (i=1; i <= number; i++) {
    console.log("Hola mundo #" + i);
}} else {
    alert("Ingrese un numero menor a 50 ");
}