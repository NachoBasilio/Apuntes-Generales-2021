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
    }
    connectedCallback(){//Este metodo es un especie de constructor para webcomponent, es decir, cuando se cargue el componente en el DOM, este metodo se va a ejecutar.
        // this.innerHTML = `<div class="header">
        // <img src="https://pbs.twimg.com/profile_images/1469812812511948802/42JLNnH1_400x400.png" alt="">
        // <h1>Igancio Basilio / @ignadev</h1>
        // `
        this.render()//Render es una función que se va a ejecutar en el momento que se cargue el componente en el DOM para pintar el componente. Otros framkworks no necesitan de este metodo.
    }

    render(){
        this.innerHTML = `<div class="header">
        <img src="https://pbs.twimg.com/profile_images/1469812812511948802/42JLNnH1_400x400.png" alt="">
        <h1>Igancio Basilio / @ignadev</h1>
        `
    }
}

//Esto es un componente, inutil pero lo es. Ahora solo falta asociarlo a una etiqueta.
customElements.define("header-portafolio", HeaderPortafolio)