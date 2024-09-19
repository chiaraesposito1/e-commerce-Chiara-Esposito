class producto {
    constructor (titulo, detalle, precio, stock, imagen){
        this.titulo = titulo,
        this.detalle = detalle,
        this.imagen = imagen,
        this.precio = precio,
        this.stock = stock;
    }
}

const auto = new producto ("auto 1", 
    "auto detalle", 
    "$445", 
    "Disponible", 
    "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fpeugeot_208_2022_perfil_frente.jpg&w=1440&q=90");

    
let main = document.querySelector("main");


main.innerHTML =  `<div class="card">
        <img src="${auto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title-1">${auto.titulo}</h5>
        <p class="card-text-1">${auto.detalle}</p>
        <p class="card-text-1">${auto.precio}</p>
        <p class="card-text-1">${auto.stock}</p>
        <a href="./producto.html" class="btn btn-primary">Ver más</a>
        </div>
        </div>`



