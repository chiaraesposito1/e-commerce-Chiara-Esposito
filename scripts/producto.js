import {data} from "./scripts/data.js"

class producto {
    constructor (id, price, title, description, genre, image){
        this.title = title,
        this.description = description,
        this.image = image,
        this.genre = genre,
        this.price = price,
        this.id = id
    }
}

//accedemos al producto, split separa el = por una coma. Busco el segundo valor del producto, [1]
const peliculaId = window.location.search.split("=")[1];
const peliculaFiltered = data.find((pelicula) => pelicula.id === peliculaId);
//encontrar en película los que cumplan la condición.

if(peliculaFiltered){
    let main = document.querySelector("main");
    main.innerHTML =  `
                <div class="row">
                    <div class="col-6">
                        <img src="${peliculaFiltered.image}" class=" mb-4 rounded-start">
                    </div>
                    <div class="col-6">
                        <h1 class="mb-2">${peliculaFiltered.title}</h1>
                        <p>${peliculaFiltered.description}</p>
                        <p class="text-light"Precio: ${peliculaFiltered.price}</p>
                        <a href="./index.html" class="btn mt-2">Volver al Home</a>
                    </div>
                    </div>
                </div>`;
        
    } else{
        let main = document.querySelector("main");
        main.innerHTML = `<p>Este producto no está disponible</p>`;
    }



