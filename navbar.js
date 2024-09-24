const header = document.querySelector("header")

let navbar = [
    {tituloCategoria: "Contacto", href: "/contact.html"},
    {tituloCategoria: "Nosotros", href: "/nosotros.html"},
    {tituloCategoria: "Productos", href: "/productos.html"}
]

let menu = [];

for(let categoria of navbar) {
    menu.push (`<a class="nav-link active" href="${categoria.href}"> ${categoria.tituloCategoria}</a>`)
}

header.innerHTML = menu.join("");

