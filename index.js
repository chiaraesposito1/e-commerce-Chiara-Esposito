
function totalcards(){

const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
h1.innerText = "Productos";

const cards = [];

    for(let i = 1; i <= 9; i++){
     const card = 
        `<div class="card">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title-1">Auto 1</h5>
        <p class="card-text-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Ver más</a>
        </div>
    </div>`
    cards.push(card);
    container.innerHTML = cards;
}}

totalcards()


