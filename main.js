
let saludo = document.getElementsByClassName('saludo');
let inicio2 = prompt("Tres personas entraron a un hotel, para conocer los nombres de la persona que llego primero escribe 1, la persona que llego segunda escribe 2, y la persona que llego tercera escribe 3")

switch (inicio2) {
    case '1':
        saludo[0].innerHTML = 'Daniel es el primero en llegar';
    break;
    case '2':
        saludo[1].innerHTML = 'Alejandra es la segunda persona en llegar';
    break;
    case '3':
        saludo[2].innerHTML = 'Santiago es la tercera persona en llegar';
    break;
}

/*saludo[3].innerHTML = 'Santiago';*/