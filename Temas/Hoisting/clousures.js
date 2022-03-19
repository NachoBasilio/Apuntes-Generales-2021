//Los clousures son funciones que se pueden llamar dentro de otras funciones y que tienen acceso a variables de la funcion que la llama. Principalmente se usan para crear funciones que se pueden reutilizar.

function crearUsuario(n){
    let nombre = n;
    return {
        getNombre: function(){
            return nombre;
        },
        setNombre: function(nuevoNombre){
            nombre = nuevoNombre;
        }
    }
}

let usuario1 = crearUsuario("Juan");
usuario1.setNombre("Pedro");
console.log(usuario1.getNombre());
console.log(usuario1)//Nunca nos imprime la variable en si, dejando como unica manera de cambiar la variable el metodo setNombre.