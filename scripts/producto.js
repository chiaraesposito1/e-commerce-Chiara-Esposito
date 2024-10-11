class producto {
    constructor (id, trailer, title, description, price, image){
        this.title = title,
        this.description = description,
        this.image = image,
        this.precio = price,
        this.trailer = trailer,
        this.id = id
    }
}

let main = document.querySelector("main");

main.innerHTML =  `<div class="card">
        <img src="${pelicula.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title-1">${pelicula.title}</h5>
        <p class="card-text-1">${pelicula.description}</p>
        <p class="card-text-1">${pelicula.price}</p>
        <p class="card-text-1">${pelicula.trailer}</p>
        <a href="/producto.html?prod=${pelicula.id}" class="btn-card">Ver más</a>
        </div>
        </div>`;





