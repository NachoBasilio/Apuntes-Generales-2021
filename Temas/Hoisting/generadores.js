//Los generadores son una feature de ES6 que nos permite crear funciones que se pueden detener y continuar despues de una determinada ejecucion.

//Estas notas estan conectadas a un archivo de html
const mostrar = document.getElementById("mostrar");
const generar = document.getElementById("generar");

function * generador(){ //Las funciones generadores se definen con un asterisco entre funcion y nombre.
    for(let i = 0; i < 5; i++){
        yield(mostrar.innerHTML = i);//El yield es una palabra reservada que nos permite detener la ejecucion de una funcion y continuar despues.
    }
}

const g = generador();

generar.addEventListener("click", () => {
    g.next();//El next es un metodo que nos permite ejecutar la funcion generadora.
})