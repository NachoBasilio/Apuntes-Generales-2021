const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {//Vamos a crear una clase para nuestro bloque.
    constructor(data){
        this.hash = null; //El hash cuando se crea el bloque es null, pero cuando se añade a la cadena se computa.
        this.height = 0; //El bloque tiene una altura, que es la altura del bloque anterior mas 1, por defecto esw 0.
        this.body = Buffer.from(JSON.stringify(data).toString("hex")); //El cuerpo del bloque es el contenido del bloque, para poderlo serializarlo vamos a trasformarlo en string y luego a sexadecimal.
        this.time = 0; //El tiempo del bloque es el tiempo actual en el momento de crearlo.
        this.previousBlockHash = ""; //Esto es lo que enlaza el bloque con el anterior, por defecto es vacio.
    }

    //Ahora vamos a hacer funciones para comprobar los hashes y el tiempo.
    validate(){
        const self = this;
        return new Promise((resolve, reject) => {
            let currentHash = self.hash;
            self.hash = SHA256(JSON.stringify({ ...self, hash: null })).toString();

            if(currentHash !== self.hash){
                reject(false);
            }
            resolve(true)
        })//Esta promesa va a evaluar si el hash es el correcto, asi comprobando que la informacion del bloque se ha guardado correctamente.
    }

    //Con este metodo vamos a decodificar el cuerpo del body, ya que lo tenemos en sexadecimal.
    getBlockData(){
        const self = this;
        return new Promise((resolve, reject) => {
            let encodedData = self.body;
            let decodedData = hex2ascii(encodedData);//con ayuda de esta libreria vamos a decodificar el cuerpo del bloque.
            let dataObject = JSON.parse(decodedData);
            if(dataObject === "Genesis Block"){//El bloque genesis es el primer bloque que se crea, por lo que no tiene un bloque anterior y su altura es 0.
                reject(new Error("Genesis Block"));
            }
            resolve(dataObject);

        })
    }

    //Este metodo va a ser usado para mostrar en consola el bloque.
    toString(){
        const {hash, height, body, time, previousBlockHash} = this;
        return `Block - 
        Hash: ${hash}
        Height: ${height}
        Body: ${body}
        Time: ${time}
        Previous Block Hash: ${previousBlockHash}
        -----------------------------------------------------`;
    }
}

module.exports= Block;