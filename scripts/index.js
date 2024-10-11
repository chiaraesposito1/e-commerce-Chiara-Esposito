const h1 = document.querySelector("h1");
const container = document.querySelector(".container-products");
h1.innerText = "Películas";

const data = [
    {
      id: 1,
      title: "Blood in the Mobile",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
      genre: "Documentary",
      price: 16,
    },
    {
      id: 2,
      title: "Toe to Toe",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/119x100.png/dddddd/000000",
      genre: "Drama",
      price: 56,
    },
    {
      id: 3,
      title: "Country Strong",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/216x100.png/cc0000/ffffff",
      genre: "Drama|Musical|Romance",
      price: 22,
    },
    {
      id: 4,
      title: "Barbershop 2: Back in Business",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/190x100.png/dddddd/000000",
      genre: "Comedy",
      price: 19,
    },
    {
      id: 5,
      title: "Filming 'Othello'",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
      genre: "Documentary",
      price: 79,
    },
    {
      id: 6,
      title: "Noise",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/144x100.png/dddddd/000000",
      genre: "Drama|Thriller",
      price: 5,
    },
    {
      id: 7,
      title: "Parasite",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/172x100.png/dddddd/000000",
      genre: "Horror|Sci-Fi",
      price: 99,
    },
    {
      id: 8,
      title: "Boiling Point (3-4 x jûgatsu)",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/231x100.png/ff4444/ffffff",
      genre: "Action|Comedy|Crime",
      price: 39,
    },
    {
      id: 9,
      title: "Elegy",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/191x100.png/dddddd/000000",
      genre: "Drama|Romance",
      price: 54,
    },
    {
      id: 10,
      title: "Mississippi Grind",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
      genre: "Drama",
      price: 48,
    },
    {
      id: 11,
      title: "Lost in La Mancha",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/171x100.png/cc0000/ffffff",
      genre: "Documentary",
      price: 39,
    },
    {
      id: 12,
      title: "Stockholm Stories",
      description:"bortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image: "http://dummyimage.com/149x100.png/cc0000/ffffff",
      genre: "Drama",
      price: 2,
    },
  ];

const cards = data.map((pelicula) => {
      return  `  
      <div class="card">
      <img src=${pelicula.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title-1">${pelicula.title}</h5>
            <p class="card-text-1">${pelicula.description}</p>
            <p class="card-text-1">${pelicula.price}</p>
            <p class="card-text-1">${pelicula.trailer}</p>
            <a href="/producto.html?prod=${pelicula.id}" class="btn-card">Ver más</a>
          </div>
    </div>`
})

container.innerHTML = cards.join("");



//Search
const btnBuscar = document.querySelector(".btn-buscar")
const btnReset = document.querySelector(".btn-reset")
const input = document.querySelector("input")

const busqueda = () => {
  
  //Filtrar datos 
  const filterData = data.filter(pelicula.title.toLowerCase() === input.value.toLowerCase())
  
  if(filterData.length === 1){
      const lista = data.map((li) => `<li>${lista.title}</li>`)
      ul.innerHTML = lista.join("")
  } else{
      ul.innerHTML = "No existe";
  }
}

const reset =() => {
  input.value = "";
  const lista = data.map(li => `<li>${lista.title}</li>`)
  ul.innerHTML = lista.join("")
}
const ul = document.querySelector("ul")
const lista = data.map(li =>`<li>${lista.title}</li>`)

filterData.innerHTML = cards.join("")

//Hacer que funcione
btnBuscar.addEventListener("click", busqueda)
btnReset.addEventListener("click", busqueda)







