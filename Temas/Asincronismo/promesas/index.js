const promise = new Promise(function(resolve, reject){//Resolve y reject pueden ser cualquier nombre, estos son una convencion
    resolve("hey!")
})

const nombre = "Julsian"

const JulianControler = new Promise(function(resolve, reject){
    if(nombre == "Julian"){
        resolve("Si sos")
    }else{
        reject("No sos >:C")
    }
})

JulianControler
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
}).finally(function(){
    console.log("Todo finalizo de manera exitosa")
})
