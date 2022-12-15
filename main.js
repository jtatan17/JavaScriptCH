/*Array de productos */

const menu = [
  {
    id: 1,
    img: "Images/Pepperoni.jpg",
    nombre: "Pepperoni",
    precio: 15,
    desc: "Descripcion generica",
    cantidad: 1,
  },
  {
    id: 2,
    img: "Images/Hawaiana.jpg",
    nombre: "Hawaiana",
    precio: 12,
    desc: "Descripcion generica",
    cantidad: 1,
  },
  {
    id: 3,
    img: "Images/Italo.jpg",
    nombre: "Italo",
    precio: 10,
    desc: "Descripcion generica",
    cantidad: 1,
  },
  {
    id: 4,
    img: "Images/PolloChamp.jpg",
    nombre: "Pollo y Champiñones",
    precio: 13,
    desc: "Descripcion generica",
    cantidad: 1,
  },
  {
    id: 5,
    img: "Images/Veggie.jpg",
    nombre: "Veggie",
    precio: 11,
    desc: "Descripcion generica",
    cantidad: 1,
  },
];
let cart = [];
const exitBtn = document.getElementById("exitBtn");
const btnCart = document.getElementById("botonCarrito");
const cartContainer = document.getElementById("productsInCart");
btnCart.onclick = () => {
  document.getElementById("cartcontainer").style.display = "block";
};
exitBtn.onclick = () => {
  document.getElementById("cartcontainer").style.display = "none";
};
const mainContainer = document.getElementById("main-container");
const cartCounter = document.getElementById("cartCounter");
const totalPrice = document.getElementById("totalPrice");

const allProducts = async () => {

  /*LocalSotarege*/
 
  const productsFetch = await fetch("productos.json");
  const prodcutosJson = await productsFetch.json();

  prodcutosJson.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div class="imagecontainer">
     <img class="pizzaimg" src=${product.img} />
    </div>
    <div class="card-footer">
      <div class="card-description">
        <h3>${product.nombre}</h3>
        <p>${product.desc}</p>
        <p>Precio:$ ${product.precio}</p>
      </div>
      <div class="card-interaction">
        <button id="addButton${product.id}" class="button-23">Agregar</button>   
      </div>
    </div>
    `;
    mainContainer.appendChild(div);
    const addButton = document.getElementById(`addButton${product.id}`);
    addButton.onclick = () => {
      ripeater(product.id - 1);
      updateCart();
    };
  });
  /*Code */
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
      cart = JSON.parse(localStorage.getItem("carrito"));
      updateCart();
    }
  });
  /*Contador de cada producto del carrito */
  function ripeater(index) {
    const exists = cart.some((prod) => prod.id === prodcutosJson[index].id);
    if (exists) {
      const prod = cart.map((prod) => {
        if (prod.id === prodcutosJson[index].id) {
          prod.cantidad++;
          updateCart();
        }
      });
    } else {
      cart.push(prodcutosJson[index]);
      console.log(cart);
    }
  }

  /*Funcion para vaciar carrito */
  const emptyCart = document.getElementById("emptyCart");
  emptyCart.onclick = () => {
    cart.length = 0;
    prodcutosJson.forEach((prod) => {
      prod.cantidad = 1;
    });
    updateCart();
    localStorage.setItem("carrito", JSON.stringify(cart));
    console.log(cart);
  };
  /*Funcion para actualizar el carrito */
  const updateCart = () => {
    productsInCart.innerHTML = "";
    cart.forEach((prod) => {
      const div = document.createElement("div");
      div.className = "productInCart";
      div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>$ ${prod.precio}</p>
    <p>Cantidad ${prod.cantidad}</p>
    <button id ="deleteFromCart${prod.id}" class="boton-eliminar button-23">Eliminar</button>
    `;
      productsInCart.appendChild(div);
      localStorage.setItem("carrito", JSON.stringify(cart));
      const deleteButton = document.getElementById(`deleteFromCart${prod.id}`);
      deleteButton.onclick = () => {
        deleteFromCart(prod.id);
      };

      /*Funcion para eliminar del carrito */
      const deleteFromCart = (prodId) => {
        const item = cart.find((prod) => prod.id === prodId);
        const index = cart.indexOf(item);
        cart.splice(index, 1);
        updateCart();
        prodcutosJson[prodId - 1].cantidad = 1;
      };
    });
    cartCounter.innerText = cart.length;
    totalPrice.innerText = cart.reduce(
      (acc, prod) => acc + prod.precio * prod.cantidad,
      0
    );
  };
};
allProducts();

/*Implementacion sweet alert */
const buyItems = document.getElementById("buyItems");
buyItems.onclick = () => {
  if (cart.length === 0) {
    Swal.fire({
      title: "Tu carrito esta vacio",
      text: `Compra algo para terminar la compra`,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    Swal.fire({
      title: "COMPRA FINAL",
      text: `Usted va a comprar ${cart.length} productos, por un valor de $${totalPrice.innerText}, `,
    });
  }
};
