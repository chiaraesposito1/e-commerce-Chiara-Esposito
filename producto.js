class producto {
    constructor (id, trailer, title, description, price, stock, image){
        this.title = title,
        this.description = description,
        this.image = image,
        this.precio = price,
        this.trailer = trailer,
        this.id = id;
    }
}

const pelicula = new producto ("pelicula 1", 
    "pelicula detalle", 
    "$445", 
    "Disponible", 
    "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fpeugeot_208_2022_perfil_frente.jpg&w=1440&q=90");

    
let main = document.querySelector("main");

main.innerHTML =  `<div class="card">
        <img src="${pelicula.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title-1">${pelicula.title}</h5>
        <p class="card-text-1">${pelicula.description}</p>
        <p class="card-text-1">${pelicula.price}</p>
        <p class="card-text-1">${pelicula.trailer}</p>
        <a href="./producto.html?prod=${pelicula.id}" class="btn btn-primary">Ver más</a>
        </div>
        </div>`;





