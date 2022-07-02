let stockproducts = [
    {id:1, nombre: "Ajuste", cantidad: 1, desc: "Aceite para motocicleta", precio: 1500, img:"./imagenes/benjamin-brunner-K3cjUOMmMhc-unsplash.jpg"},
    {id:2, nombre: "Cambio correa", cantidad: 1, desc: "Aceite para motocicleta", precio: 1500, img:"./imagenes/chad-kirchoff-xe-e69j6-Ds-unsplash.jpg"},
    {id:3, nombre: "Sincronizacion", cantidad: 1, desc: "Aceite para motocicleta", precio: 1500, img:"./imagenes/christian-buehner-Fd6osyVbtG4-unsplash.jpg"},
    {id:4, nombre: "Mantenimiento", cantidad: 1, desc: "Aceite para motocicleta", precio: 1500, img:"./imagenes/maxim-hopman-s4d_ESS0ylA-unsplash.jpg"},
    {id:5, nombre: "Cambio de aceite", cantidad: 1, desc: "Aceite para motocicleta", precio: 1500, img:"./imagenes/tim-mossholder-V37iTrYZz2E-unsplash.jpg"},
]

const contenedorProductos = document.getElementById("contenedorproductos")
const contenedorCarrito = document.getElementById
let carrito = []


stockproducts.forEach ((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src= ${producto.img}>
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class = "precioProducto" >precio:$ ${producto.precio}</p>
    <button id = "agregar${producto.id} class = "botonagregar">Agregar</button>` ;

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);
    /*
    boton.addEventListener('click', ()=> {
        agregarAlCarrito(producto.id)
    })*/
})
    
const agregarAlCarrito = (prodId) => {
    const item = stockproducts.find((prod) => prod.id === prodId)
    carrito.push(item);
    console.log(carrito);
}
