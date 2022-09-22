//Un callback es una funcion que se pasa como argumento a otra funcion, luego dentro de esa funcion se ejecutara.

function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(1,2,suma))

function saludo(callback){
    console.log("Hola")
    setTimeout(callback, 111);
}

saludo(function(){console.log("saludo")});