import { data } from "/scripts/data.js"

const h1 = document.querySelector("h1");
const container = document.querySelector(".container-products");
h1.innerText = "Películas";

  //elementos del array transformados (función)

  const cards = data.map((pelicula) => {
      return  `  
      <div class="card">
      <img src=${pelicula.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title-1">${pelicula.title}</h5>
            <p class="text-genero">${pelicula.genre}</p>
            <p class="card-text-1">${pelicula.description}</p>
            <p class="card-text-1">${pelicula.price}</p>
            <a href="/producto.html?prod=${pelicula.id}" class="btn-card">Ver más</a>
          </div>
    </div>`
})

container.innerHTML = cards.join("");

//Search
const btnBuscar = document.querySelector(".btn-buscar")
const btnReset = document.querySelector(".btn-reset")
const input = document.querySelector("input")

const lista = data.map((li) => `<li>${li.title}</li>`)
cards.innerHTML = lista.join("")
//cards: contenedor de información de la card

//Eventos
const busqueda = () => {
  //Filtrar el orginal 
  const filterData = data.filter((pelicula) => pelicula.title.toLowerCase() === input.value.toLowerCase())
  
  if(filterData.length === 1){ 
      const lista = filterData.map((li) => `<li>${li.title}</li>`)
      cards.innerHTML = lista.join("");
  }else{
      cards.innerHTML = "No existe esa película"
  }

  filterData.innerHTML = cards.join("");
}
const reset = () => {
  input.value = "" //vacio
  const lista = data.map((li) => `<li>${li.title}</li>`)
  cards.innerHTML = lista.join(""); 
}

//Hacer que funcione
btnBuscar.addEventListener("click", busqueda)
btnReset.addEventListener("click", reset)

filterData.innerHTML = cards.join("")











