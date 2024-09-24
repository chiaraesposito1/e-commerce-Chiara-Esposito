/*let edad = prompt("Cual es la mejor edad?");

while(edad !== "32"){
    console.log("edad adulta");
    edad = prompt("Cual es la mejor edad?");
}

for(let i = 4; i < 10; i++){
    if(i === 9){
        console.log("Es 5");
        break // sale de la condicion hasta el numero 9
    }else{
      console.log(i * 2);  
    }
    
}


Calculadora 
    const pregunta = prompt ("¿Qué operación desea realizar? 1.Suma 2.Resta 3.División 4.Multiplicación");
    const num1 = prompt ("Introduzca el primer número");
    const num2 = prompt ("Introduzca el segundo número");
    
    if(pregunta == "1"){
        alert(num1 + num2);
    }else if (pregunta == "2"){
        alert(num1 - num2);
    } else if (pregunta == "3"){
        alert(num1 / num2);
    }else if (pregunta == "4"){
        alert (num1 * num2);
    }

Si acerta o no un numero
    const random = Math.floor(Math.random() * 3);
    const num = Number (prompt("Introduzca un número entre 1 y 3"));
    if (num <= 3){
        alert ("acierto");
    } else{
        alert("no acertaste");
    } 
        
/*
const h5 = document.querySelector(".card-title-1");
const texto = document.querySelector (".card-text-1");
const imagen = document.querySelector(".card img") //img es el hijo de card.

h5.innerText = "Dibu" //cambia el nombre de la pantalla. 
texto.innerText = "El más grande del mundo";  // cambie el texto de la pantalla primera card.
imagen.src = "https://imgs.search.brave.com/tIBCofKly71UnONFEMxzXgg1EvsSyowV7MUDH-t_jeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyMy8xMi8w/OS9XSGZEdXU2NE1f/MzQweDM0MF9fMS5q/cGc" 

const card2 = document.querySelector(".card-title-2");
const texto2 = document.querySelector (".card-text-2");
const imagen2 = document.querySelector(".card-img-top2") //img es el hijo de card.

card2.innerText = "Messi" //cambia el nombre de la pantalla. 
texto2.innerText = "El más grande del mundo";  // cambie el texto de la pantalla primera card.
imagen2.src = "https://imgs.search.brave.com/tIBCofKly71UnONFEMxzXgg1EvsSyowV7MUDH-t_jeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyMy8xMi8w/OS9XSGZEdXU2NE1f/MzQweDM0MF9fMS5q/cGc"

const card3 = document.querySelector(".card-title-3");
const texto3 = document.querySelector (".card-text-3");
const imagen3 = document.querySelector(".card-img-top-3") //img es el hijo de card.

card3.innerText = "Di maria" //cambia el nombre de la pantalla. 
texto3.innerText = "El más grande del mundo";  // cambie el texto de la pantalla primera card.
imagen3.src = "https://imgs.search.brave.com/tIBCofKly71UnONFEMxzXgg1EvsSyowV7MUDH-t_jeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyMy8xMi8w/OS9XSGZEdXU2NE1f/MzQweDM0MF9fMS5q/cGc"  


    */

const numero = Number(prompt ("Introduzca un número del 1 al 3"));
const random = Math.floor(Math.random() * 3);
switch(numero){
    case 1: 
    if(numero === 1){
        alert("acertaste num 1");
    }else{
        alert("numero incorrecto");
    }  
    break;
    case 2:
        if(numero === 2){
            alert("acertaste num 2");
        }else{
            alert("numero incorrecto");
        }  
        break;
    case 3:
        if(numero === 3){
            alert("acertaste num ${}");
        }else{
            alert("numero incorrecto");
        }   
        break;
    default:
        alert ("no hagas trampa, indicá un numero entre 1 y 3");
}

//explicacion de comas
   
//section.innerHTML = array.join().replaceAll(",", "") //convierte a string el join y el replace reemplaza las comas , en nada .
 

//funcion y su nombre y su parametro
function suma (num1, num2){
    return num1+ num2  
 }
 
 let suma1 = suma(2, 8);
 let suma2 = suma(10, 10);
 let sumatotal = suma1 + suma2
 
 console.log(sumatotal) //le paso los valores que quiero que se sume
 
 
 //funciones anónimas, la funcion no tiene nombre, la variable si
 const loro = function(str){
     return str
 }
 loro("Hola")
 
//funciones flecha
 const hola = (a) =>{
     const b = a + 1
     return b
 }
  hola(5)
 
//si solo retorna una sola cosa se resume así:
  const chau = (a) => a  
  chau(5)


/*Crear función que pregunte día, mes y año y devuelva en que estación climática del año te encuentras.
El resultado de la invocación a la función asignarlo a una variable y luego hacer un alert de la variable. 
*/
function estacion (dia, mes){
    if((dia <= 21) && (mes == "diciembre, enero, febrero, marzo")){
        alert("Es verano");
    } else if ((dia > 21) && (mes == "marzo")){
        alert("Es otoño")
    }else if((dia <= 21) && (mes == "mayo, abril")){
        alert("Es otoño");
    } else if ((dia > 21) && (mes == "mayo")){
        alert("Es invienro")
    } else if((dia <= 21) && (mes == "junio, julio, agosto")){
        alert("Es invierno");
    } else if ((dia > 21) && (mes == "agosto")){
        alert("Es primavera")
    } else if((dia <= 21) && (mes == "septiembre, octubre, noviembre")){
        alert("Es primavera");
    } else if ((dia > 21) && (mes == "diciembre")){
        alert("Es verano")
    }
}
estacion ( Number(prompt("Introduce el día (1-31):")), prompt("Introduce el mes:")) ;

const estacionActual = estacion;
alert(estacionActual)


//OBJETOS
let userName = "Julio"
let userLastName = "Avantt"
let userAge = 18

//Objeto, alternativa a lo de arriba
let user = {
    name: "Julio",
    apellido: "Avantt",
    edad: 18
}
let propiedad1 = "lastName"
//Acceder a las propiedades de los objetos
console.log(`Mi nombre es: ${user.name}`) //estático: se accede por el punto y el nombre de la variable
console.log(user[propiedad1]) // dinámico: me da como resultado "Avantt"

const usuario = {
    name: "Julio",
    apellido: "Avantt",
    edad: 18,
    dicePavadas: function (){ //un objeto puede tener acciones tambien
        console.log(`${this.name} dice muchas pavadas`) //con el this hace referencia al obj de usuario
    }
}
user.nation = "Chaco" //le agregue una propiedad
user.lastName = "Alvarez" //Mutar un objeto: aca si se cambia de valor aunque sea const

//Ver si la propiedad existe o no
if("dignidad" in user){
    console.log("si")
}else{
    console.log("no") //No, ya que a propiedadad "dignidad" en un obj (user)
}

//ejercicio
//cre
const equipos = {
    river: {
        nombre: "river",
        titulos: 5,
        estadio: "Gallinero",
        idolo: "Gallardo",
    },
    boca: {
        nombre: "boca",
        titulos: 2,
        estadio: "Bombonera",
        idolo: "Riquelme"
    }
} 

/*
equipos.boca.saludo="saludo boca" // se agrega a los atributos de boca
let prop = "saludo"
console.log(equipos.boca[prop]) //llamo a la propiedad
*/

let equipo = prompt ("Elegí equipo: river o boca")
let propiedad = prompt ("Elegí propiedad: titulos, estadio, idolo")

alert(`Mi equipo es ${equipos[equipo].nombre} y mi idolo es: ${equipos[propiedad]}`)

console.log(equipos.boca.titulos);


//CLASES 
let direccionMai ={
    calle: "nuñez",
    piso: 2,
    dept: "B",
    CP: 1431,
    pais: "Argentina"
}
//crear la direccion de tooodos las personas para eso usamos las clases

class direccion{
    constructor(calle, piso, dept, CP, pais){ //funcion interna
        this.calle = calle;
        this.piso = piso;
        this.dept = dept;
        this.CP = CP;
        this.pais = pais;
    }
 //metodos de una clase
  getDireccion(){
    return `mi direccion es: ${this.calle}`
 }
}
 //invocamos a la clase que termina siendo objeto, llamamos a la clase y ponemos los argumentos
const direccionLauta = new direccion("Urquiza", 2, "A", 1431, "Argentina")
const direccionFran = new direccion ("Palermo", 3, "B", 1412, "Chile")
const direccionChia = new direccion ("Saavedra", 7, "B", 1431, "Argentina")
console.log(direccionChia.getDireccion()) // resultado "mi direccion es saavedra"


//EJERCICIO MOSTRAR EN TABLA
class pc {
    constructor(ram, monitor, fuente, red){
       this.ram = ram; 
       this.fuente = fuente;
       this.monitor = monitor;
       this.red = red;
    }
    random (){
        return Math.random() *100 /*num aleatoreo entre 1 y 100 */
    }   
}

function showTable (obj) { //Mostrar como tabla
    console.table(obj); //recine un objeto
}

function createInstanciaPC () { //creamos un objeto que esté basado en la clase
     let ram = prompt("Ingresa RAM: ")
     let fuente = prompt("Ingresa fuente: ")
     let monitor = prompt("Ingresa monitor: ")
     let red = prompt("Ingresa red: ")

     const myPC = new pc(ram, monitor, fuente, red) //creamos un objeto

     showTable(myPC);
}
createInstanciaPC()


//ARRAYS
let compras = ["Pan", "Leche", "Fideos"];
console.log(compras[0]) //llamamos por el índice (pan).
console.log(compras.at(0)) //lo mismo que el primero
console.log(compras.at(-1)) //me da el ultimo elemento del array.

//ARRAYS DE OBJETOS 

const personas = [ //1 objeto con dos elemento
    {
    nombre: "Julio",
    edad: 18 
    },
    {
    nombre: "Sofia",
    edad: 20
    }
]
console.log(personas) //accedemos al array
console.log(personas.at(0)) //accedemos al obj
console.log(personas.at(0).age) //accedemos a la propiedad del obj

//BUCLES EN ARRAYS
for (let persona of personas){ //cada elemento se llama persona que está dentro de personas
    console.log(`Mi nombre es: ${persona.nombre} y mi edad es: ${persona.edad}`)
}