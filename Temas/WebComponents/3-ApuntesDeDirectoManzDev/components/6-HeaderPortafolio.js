//Digamos que quiero que este componente lo que haga es contener una imagen y un texto. La etiqueta va a ser <header-portafolio></header-portafolio> y mientras no hagamos nada va a actuar como un div.

 
//Los componentes se crean de manera nativa por medio de clases, esta clase cre vamos a crear tiene que extender de HTMLElement.
class HeaderPortafolio extends HTMLElement{
    constructor(){ //Siempre comenzamos con el constructor y su super ya que extiende de HTMLElement
        super()
        //this.textContent = "Portafolio" Con this vamos a hacer referencia la instancia de la clase, cosa curiosa porque en este caso nos vamos a referir a nuestro componente que ahora se encuentra en el DOM. Así podemos agregar cosas a nuestro componente y que se vea en la página.
        // this.innerHTML = `<div class="header">
        // <img src="https://pbs.twimg.com/profile_images/1469812812511948802/42JLNnH1_400x400.png" alt="">
        // <h1>Igancio Basilio / @ignadev</h1>
        // `//Esto es lo que realmente me interesa, el innerHTML es una propiedad que nos permite agregar código html dentro de nuestro componente.

        this.attachShadow({mode: "open"})//Con esto le decimos que vamos a usar el shadow dom, es decir, que vamos a crear una sombra para nuestro componente.Una vez hacemos esto todo se rompe y tenemos que meter todos los componentes en el shadow dom. 
    }
    connectedCallback(){//Este metodo es un especie de constructor para webcomponent, es decir, cuando se cargue el componente en el DOM, este metodo se va a ejecutar.
        // this.innerHTML = `<div class="header">
        // <img src="https://pbs.twimg.com/profile_images/1469812812511948802/42JLNnH1_400x400.png" alt="">
        // <h1>Igancio Basilio / @ignadev</h1>
        // `
        this.nombre = this.getAttribute("nombre") ?? "Nacho"//Asi podemos tomar los atributos que se han puesto en el componente.
        this.render()//Render es una función que se va a ejecutar en el momento que se cargue el componente en el DOM para pintar el componente. Otros framkworks no necesitan de este metodo.
    }


    /*
    Hay distintos metodos para manejar atributos:
    .hasAttribute(name)
    .getAttribute(name)
    .setAttribute(name, value)
    .removeAttribute(name)
    .toggleAttribute(name)
    */ 

    /* 
    Para observar y reaccionar a cambios hay otros metodos: 
    - observedAttributes(){
            return ["nombre"]
        }
    - attributeChangedCallback(name, oldValue, newValue){
    */

        
    

    // render(){//Vamos a usar la api del DOM de html para pintar el componente. Las dos son buenas maneras de hacerlo.
    //     const h1 = document.createElement("h1")
    //     h1.textContent = this.nombre

    //     const img = document.createElement("img")
    //     img.src = "https://pbs.twimg.com/profile_images/1469812812511948802/42JLNnH1_400x400.png"

    //     const header = document.createElement("header")
    //     header.appendChild(img)
    //     header.appendChild(h1)

    //     this.appendChild(header)
    // }

    disconnectedCallback(){//Este metodo es un especie de destructor para webcomponent, es decir, cuando se elimine el componente del DOM, este metodo se va a ejecutar.
        console.log("Se ha eliminado el componente")
    }




    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/6-HeaderPortafolioCSS.css">
        <div class="header">
        <img src="https://pbs.twimg.com/profile_images/1469812812511948802/42JLNnH1_400x400.png" alt="">
        <h1>${this.nombre}/ @ignadev</h1>
        </div>
        `//Para agregar estilos podemos usar la etiqueta style y dentro de ella vamos a poner el css. Podemos tener un css global y un css por componente.
        //Con el shadow dom podemos agregar estilos a los componentes y que solo se queden en los mismos, sin dejar que css entre o salga de los mismos.
        //ahroa si con el ShadowRoot, el css no se va a escapar. Tambien podemos traer estilos desde un archivo externo, esto hace una peticion externa y puede ser complicado con el rendimiento.
        //Las variables CSS si traspasan el shadow dom.
        //:host{} es una pseudo clase que se usa para agregar estilos a un componente como padre de todo lo que tiende dentro.
        //:host(.classenombre){} es una pseudo clase que se usa para agregar si es que el componente tiene una clase.
        //:host-context(.classenombre){} busca si en los padres del componente tiene una clase en espesifica.
    }
}

//Esto es un componente, inutil pero lo es. Ahora solo falta asociarlo a una etiqueta.
customElements.define("header-portafolio", HeaderPortafolio)