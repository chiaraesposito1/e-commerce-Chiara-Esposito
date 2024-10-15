import { data } from "/scripts/data.js"

const h1 = document.querySelector("h1");
const container = document.querySelector(".container-products");
h1.innerText = "Películas";


//elementos del array transformados (función)
function cards (data){
  const cardsArray = data.map((pelicula) => `
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
  )
    document.querySelector(".container-products").innerHTML = cardsArray.join("")
}
cards(data)

//Search
const btnBuscar = document.querySelector(".btn-buscar")
const btnReset = document.querySelector(".btn-reset")
const input = document.querySelector("input")

//Eventos
const busqueda = () => {
  const filterData = data.filter((item) => item.title.toLowerCase() === input.value.toLowerCase());
  
  if(filterData.length === 1){ 
      cards(filterData)
  }else{
      cards.innerHTML = "No existe esa película";
  }
}
const reset = () => {
  input.value = ""
} //vacio

//Hacer que funcione
btnBuscar.addEventListener("click", busqueda)
btnReset.addEventListener("click", reset)










