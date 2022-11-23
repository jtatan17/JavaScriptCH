
/*
let productosArray = [];

class NewProduct {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const iphone = new NewProduct(1, "iphone", 700, 250);
productosArray.push(iphone);
const imac = new NewProduct(2, "imac", 1200, 150);
productosArray.push(imac);
const ipad = new NewProduct(3, "ipad", 600, 300);
productosArray.push(ipad);


const selectProd = document.getElementById("lista");
productosArray.forEach((elemento) => {
  const optionProd = document.createElement("option");
  optionProd.innerText = `${elemento.name}: $${elemento.price}`;
  optionProd.setAttribute("id", `${elemento.id}`);
  selectProd.append(optionProd);
});


const botonIngresar = document.getElementById('IngresarProd');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const finalizarCompra = document.getElementById('finalizarCompra');
let carrito = [];
botonIngresar.onclick = () => {
    const indexProd = selectProd.selectedIndex;
    const productoSeleccionado = productosArray[indexProd];
    carrito.push(productoSeleccionado);
}
vaciarCarrito.onclick = () => {
    carrito = [];
    console.log(carrito)
}
finalizarCompra.onclick = () => console.log(carrito);



let productosArray = [];

class NewProduct {
  constructor(id, name, contieneCarne, precios) {
    this.id = id;
    this.name = name;
    this.contieneCarne = contieneCarne;
    this.precios = precios;
  }
}

class ListPrecio {
  constructor(small, medium, large) {
    this.small = small;
    this.medium = medium;
    this.large = large;
  }
}

let precioUno = new ListPrecio(5, 10, 15);
let pizzaUno = new NewProduct(1, "Pepperoni", true, precioUno);
productosArray.push(pizzaUno);

let precioDos = new ListPrecio(6, 11, 16);
let pizzaDos = new NewProduct(2, "Vegetariana", false, precioDos);
productosArray.push(pizzaDos);

let precioTres = new ListPrecio(7, 11, 17);
let pizzaTres = new NewProduct(3, "Pollo con Champ", true, precioTres);
productosArray.push(pizzaTres);

let precioCuatro = new ListPrecio(6, 12, 17);
let pizzaCuatro = new NewProduct(4, "Tropical", false, precioCuatro);
productosArray.push(pizzaCuatro);

const selectProd = document.getElementById("lista");
productosArray.forEach((elemento) => {
  let optionProd = document.createElement("option");
  optionProd.innerText = `${elemento.name}: Peque$${elemento.precios.small}, Med $${elemento.precios.medium}, Grande $${elemento.precios.large}`;
  optionProd.setAttribute("id", `${elemento.id}`);
  selectProd.append(optionProd);
});
*/

/* 
let preciosMedianos = [];
for (let i = 0; i < productosArray.length; i++)
  preciosMedianos.push(productosArray[i].precios.medium); 
const resultadoFiltro = document.getElementById("filtro");
const botonIngresar = document.getElementById('FiltrarPrecio');
botonIngresar.onclick = () => {
  productosArray.forEach((elemento) => {
    let productoFiltrado = document.createElement("p");
    productoFiltrado.innerText = `${elemento.name}: Med $${elemento.precios.medium}`;
    productoFiltrado.setAttribute("id", `${elemento.id}`);
    resultadoFiltro.append(productoFiltrado);
  });
};

/* const botonIngresar = document.getElementById('IngresarProd');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const finalizarCompra = document.getElementById('finalizarCompra');
let carrito = [];
botonIngresar.onclick = () => {
    const indexProd = selectProd.selectedIndex;
    const productoSeleccionado = productosArray[indexProd];
    carrito.push(productoSeleccionado);
}


vaciarCarrito.onclick = () => {
    carrito = [];
    console.log(carrito)
} */
/*
let pizzaEP = () => {
  return pizzas.filter((pizza) => (pizza.prices.medium >= 12))
}
*/
const menu = [
  {
    id:1,
    img: 'Images/Pepperoni.jpg',
    nombre: "Pepperoni",
    precio: 15,
    desc: "Descripcion generica"
  },
  {
    id:2,
    img: 'Images/Hawaiana.jpg',
    nombre: "Hawaiana",
    precio: 12,
    desc: "Descripcion generica"
  },
  {
    id:3,
    img: 'Images/Italo.jpg',
    nombre: "Italo",
    precio: 10,
    desc: "Descripcion generica"
  },
  {
    id:4,
    img: 'Images/PolloChamp.jpg',
    nombre: "Pollo y Champiñones",
    precio: 13,
    desc: "Descripcion generica"
  },{
    id:5,
    img: 'Images/Veggie.jpg',
    nombre: "Veggie",
    precio: 11,
    desc: "Descripcion generica"
  }
];

const mainContainer = document.getElementById('main-container');

const addToCart = (prodId) => {
  const item = menu.find((prod) => prod.id === prodId)
  carrito.push(item)
}

let carrito = [];


menu.forEach((product) => {
  const div =document.createElement('div')
  div.classList.add('card')
  div.innerHTML = 
  `
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
      <button id="addButton" class="button-23">+</button>
      <button id="removeButton" class="button-23">-</button>
    </div>
  </div>
  `;
  mainContainer.appendChild(div);
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', () => {
    addToCart(product.id);
  })
});



console.log(carrito);

/*${product.id}
${product.id}*/