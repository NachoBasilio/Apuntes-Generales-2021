const funcionAsincrona = ()=>{
    return new Promise((resolve, reject)=>{
        (true) ? setTimeout(()=>{
            resolve("To viento");
        }, 2000) : reject(new Error("Na viento"))
    })
}

const funcionQueVaAUsarAsync = async () =>{
    const resultadoDeLaFuncion = await funcionAsincrona()
    console.log(resultadoDeLaFuncion)
}

funcionQueVaAUsarAsync()