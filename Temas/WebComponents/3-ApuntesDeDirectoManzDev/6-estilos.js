//La convención para nombrar un webComponent es poner un guión bajo entre las palabras que forman el nombre del mismo.
//Ahora si ¿Como creamos un webComponent? Bueno, para comenzar vamos a crear un fichero aparte para el componente, normalmente se crea una carpeta llamada components y eso voy a hacer

//Ahora vamos a importar el componente que hemos creado
import "./components/6-HeaderPortafolio.js"

//Ahora vamos a tomar el componente crear un elemento y meterlo en el body
const headerPortafolio = document.createElement("header-portafolio")
// document.body.appendChild(headerPortafolio)

// const destroy = () =>{

//     const element = document.querySelector("header-portafolio")
//     element.remove()
// } 

// setTimeout(() => {
//     destroy()
// }, 5000)