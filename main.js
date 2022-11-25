/*Array de productos */

const menu = [
  {
    id: 1,
    img: "Images/Pepperoni.jpg",
    nombre: "Pepperoni",
    precio: 15,
    desc: "Descripcion generica",
    cantidad:1,
  },
  {
    id: 2,
    img: "Images/Hawaiana.jpg",
    nombre: "Hawaiana",
    precio: 12,
    desc: "Descripcion generica",
    cantidad:1,
  },
  {
    id: 3,
    img: "Images/Italo.jpg",
    nombre: "Italo",
    precio: 10,
    desc: "Descripcion generica",
    cantidad:1,
  },
  {
    id: 4,
    img: "Images/PolloChamp.jpg",
    nombre: "Pollo y Champiñones",
    precio: 13,
    desc: "Descripcion generica",
    cantidad:1,
  },
  {
    id: 5,
    img: "Images/Veggie.jpg",
    nombre: "Veggie",
    precio: 11,
    desc: "Descripcion generica",
    cantidad:1,
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

function ripeater (index) {
  const exists = cart.some (prod => prod.id === menu[index].id)
if (exists) {
  const prod = cart.map (prod => {
    if (prod.id === menu[index].id){
      prod.cantidad++
    } 
  })
} else {
  cart.push(menu[index]);
  console.log(cart);
}
  
}


/*Eventos de botones para agregar */
addButton1.onclick = () => {
  ripeater(0);
  updateCart();
}

addButton2.onclick = () => {
  ripeater(1);
  updateCart();
  
}

addButton3.onclick = () => {
  ripeater(2);
  updateCart();
  
}

addButton4.onclick = () => {
  ripeater(3);
  updateCart();
  
}

addButton5.onclick = () => {
  ripeater(4);
  updateCart();
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
    <p>${prod.cantidad}</p>
    <button onclick ="deleteFromCart(${prod.id})" class="boton-eliminar">Eliminar</button>
    `
    productsInCart.appendChild(div);

    localStorage.setItem('carrito', JSON.stringify(cart));
  })
  cartCounter.innerText = cart.length ;
  totalPrice.innerText = cart.reduce((acc,prod) => acc + prod.precio, 0)
}

