/*Array de productos */

const menu = [
  {
    id: 1,
    img: "Images/Pepperoni.jpg",
    nombre: "Pepperoni",
    precio: 15,
    desc: "Descripcion generica",
  },
  {
    id: 2,
    img: "Images/Hawaiana.jpg",
    nombre: "Hawaiana",
    precio: 12,
    desc: "Descripcion generica",
  },
  {
    id: 3,
    img: "Images/Italo.jpg",
    nombre: "Italo",
    precio: 10,
    desc: "Descripcion generica",
  },
  {
    id: 4,
    img: "Images/PolloChamp.jpg",
    nombre: "Pollo y Champiñones",
    precio: 13,
    desc: "Descripcion generica",
  },
  {
    id: 5,
    img: "Images/Veggie.jpg",
    nombre: "Veggie",
    precio: 11,
    desc: "Descripcion generica",
  },
];

const exitBtn = document.getElementById('exitBtn');
const btnCart = document.getElementById('botonCarrito');
const cartContainer = document.getElementById('productsInCart');
btnCart.onclick = () => {document.getElementById('cartcontainer').style.display = 'block'};
exitBtn.onclick = () => {document.getElementById('cartcontainer').style.display = 'none'};

let cart = [];


const mainContainer = document.getElementById("main-container");

const addButton1 = document.getElementById("addButton1");
const addButton2 = document.getElementById("addButton2");
const addButton3 = document.getElementById("addButton3");
const addButton4 = document.getElementById("addButton4");
const addButton5 = document.getElementById("addButton5");
const cartCounter = document.getElementById("cartCounter");
const totalPrice = document.getElementById('totalPrice');

/*LocalSotarege*/
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
    cart = JSON.parse(localStorage.getItem('carrito'));
    updateCart();
  }
})

/*Eventos de botones para agregar */
addButton1.onclick = () => {
  cart.push(menu[0]);
  updateCart();
  console.log(cart);
}

addButton2.onclick = () => {
  cart.push(menu[1]);
  updateCart();
  console.log(cart);
}

addButton3.onclick = () => {
  cart.push(menu[2]);
  updateCart();
  console.log(cart);
}

addButton4.onclick = () => {
  cart.push(menu[3]);
  updateCart();
  console.log(cart);
}

addButton5.onclick = () => {
  cart.push(menu[4]);
  updateCart();
  console.log(cart);
}
/*Funcion para eliminar del carrito */
const deleteFromCart = (prodId) => {
  const item = cart.find((prod) => prod.id === prodId);
  const index = cart.indexOf(item);
  cart.splice(index,1);
  updateCart();
}
/*Funcion para vaciar carrito */
const emptyCart = document.getElementById('emptyCart')
emptyCart.onclick =() => {
  cart.length = 0;
  updateCart();
}

/*Funcion para actualizar el carrito */
const updateCart = ( ) => {
  productsInCart.innerHTML = '';
  cart.forEach((prod) => {
    const div = document.createElement('div');
    div.className = ('productInCart')
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>${prod.precio}</p>
    <button onclick ="deleteFromCart(${prod.id})" class="boton-eliminar">Eliminar</button>
    `
    productsInCart.appendChild(div);

    localStorage.setItem('carrito', JSON.stringify(cart));
  })
  cartCounter.innerText = cart.length ;
  totalPrice.innerText = cart.reduce((acc,prod) => acc + prod.precio, 0)
}

