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

const exitBtn = document.getElementById('exitBtn')
const btnCart = document.getElementById('botonCarrito')
const cartContainer = document.getElementById('productsInCart')
btnCart.onclick = () => {document.getElementById('cartcontainer').style.display = 'block'}
exitBtn.onclick = () => {document.getElementById('cartcontainer').style.display = 'none'}

let carrito = [];


const mainContainer = document.getElementById("main-container");

const addButton1 = document.getElementById("addButton1");
const addButton2 = document.getElementById("addButton2");
const addButton3 = document.getElementById("addButton3");
const addButton4 = document.getElementById("addButton4");
const addButton5 = document.getElementById("addButton5");

addButton1.onclick = () => {
  carrito.push(menu[0]);
  updateCart();
  console.log(carrito);
}

addButton2.onclick = () => {
  carrito.push(menu[1]);
  updateCart();
  console.log(carrito);
}

addButton3.onclick = () => {
  carrito.push(menu[2]);
  updateCart();
  console.log(carrito);
}

addButton4.onclick = () => {
  carrito.push(menu[3]);
  updateCart();
  console.log(carrito);
}

addButton5.onclick = () => {
  carrito.push(menu[4]);
  updateCart();
  console.log(carrito);
}


const updateCart = ( ) => {
  productsInCart.innerHTML = '';
  carrito.forEach((prod) => {
    const div = document.createElement('div');
    div.className = ('productInCart')
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>${prod.precio}</p>
    `
    productsInCart.appendChild(div);
  })
}

const emptyCart = document.getElementById('emptyCart')
emptyCart.onclick = () => {
  carrito = []; 
  console.log(carrito);
  productInCart.innerHTML = '';
}

menu.forEach((product) => {
/*   
  const div = document.createElement('div');
  div.setAttribute( 'class','card');
  div.innerHTML = `
  <div class="imagecontainer">
  <img class="pizzaimg" src= ${product.img} alt=""
  </div>
  <div class="card-footer">
    <div class="card-description">
    <h3>${product.nombre}</h3>
    <p>${product.desc}</p>
    <p>Precio:$ ${product.precio}</p>
    </div>
    <div class="card-interaction">
      <button id="addButton${product.id}" class="button-23">+</button>
      <button id="removeButton" class="button-23">-</button>
    </div>
  </div>
  `;
  
  mainContainer.appendChild(div);
  const addButton = document.getElementById("addButton${product.id}"); */
  /*
  addButton.addEventListener("click", () => {
    addToCart(product.id)
  });*/
  
  
});



function addToCart(prodId) {
  const item = menu.some((prod) => prod.id === prodId);
  carrito.push(item);
}




/*${product.id}
${product.id}*/
