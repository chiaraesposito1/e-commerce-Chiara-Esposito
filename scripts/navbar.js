const header = document.querySelector("header");

let navbar = [
    {tituloCategoria: "Home", href: "./index.html"},
    {tituloCategoria: "Categorías", href: "/categorias.html"},
    {tituloCategoria: "Sales", href: "/sales.html"},
]

header.innerHTML = `
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"></li>
        </ul>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Escribí el nombre de la película..."/>
        <button class="btn-buscar">Buscar</button>
        <button class="btn-reset">Cancelar</button>
      </div>
    </div>
  </nav>
  `
const navItems = document.querySelector(".navbar-nav")

for(let categoria of navbar) {
    navItems.innerHTML += `
      <a class="nav-link" href="${categoria.href}"> ${categoria.tituloCategoria}</a>`
  }

