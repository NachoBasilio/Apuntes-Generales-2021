//El this es una palabra reservada que nos permite acceder a las propiedades y metodos de un objeto. Pero no es exactamente como lo hace el this en otros lenguajes y que JavaScript no es igual a los otros lenguajes orientados a objetos.

//this en contexto global 

this //window

//this en una funcion

function mostrarThis(){
    this //window
}

//use strict 

function mostrarThisStrict(){
    'use strict'
    this //undefined
}

//this en objetos

const objeto = {
    mostrarThis: function(){
        this //Esto esa dentro del contexto de la funcion por lo que this no puede acceder a las propiedades del objeto.
    },
    mostrarThisArrow: () => {
        this //Esto esa dentro del contexto de la funcion por lo que this no puede acceder a las propiedades del objeto.
    }
}

//this en contexto de una clase (En este caso tiene parecido con otros lenguajes)

function Persona(nombre){
    this.nombre = nombre;
}

Persona.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}`);//Esto es una funcion de la clase Persona.
}

const Nacho = new Persona("Nacho");
Nacho.saludar();//This si hace referencia a la propiedad de la clase Persona.