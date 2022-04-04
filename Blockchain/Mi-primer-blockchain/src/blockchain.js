const Block = require('./block');
const SHA256 = require('crypto-js/sha256');

class Blockchain {
    constructor() {
        this.chain = [];//Aqui van a estar todos los bloques.
        this.height = -1;//La altura del bloque es -1, porque no hay bloques anteriores.
        this.initializeChain();//Vamos a inicializar la cadena de bloques.(Lo tenemos que definir)
    }

    async initializeChain() {
        if(this.height === -1){//Si la altura es -1, es porque no hay bloques anteriores.
            const block = new Block({data: "Genesis Block"});/*Este "data" no es el mismo que el que se pasa en el constructor, el data del constructor es todo el conjunto del objeto*/
            //Vamos a crear un bloque genesis.
            await this.addBlock(block)//Vamos a añadir el bloque genesis a la cadena de bloques.
        }
    }

    addBlock(block){
        let self = this;
        return new Promise(async(resolve, reject) => {
            block.height = self.chain.length;//El bloque tiene de altura el largo de la cadena.
            block.time = new Date().getTime().toString();//El tiempo del bloque es el tiempo actual en el momento de crearlo.
            if(self.chain.length > 0){//Si la cadena tiene bloques, entonces el bloque anterior es el ultimo bloque de la cadena.
                block.previousBlockHash = self.chain[self.chain.length - 1].hash;//El bloque anterior es el ultimo bloque de la cadena.
            }

            let errors = await self.validateChain();//Vamos a validar el bloque.
            if(errors.length > 0){//Si hay errores, entonces no se añade el bloque.
                reject(new Error("La cadena no es valida: "+errors));
            }
            block.hash = SHA256(JSON.stringify(block)).toString();//El hash del bloque es el hash del bloque sin el hash, pero con el hash calculado.
            self.chain.push(block);//Añadimos el bloque a la cadena.
            resolve(block);//Devolvemos el bloque.
        })
    }
    
    validateChain() {
        let self = this;
        const errors = [];
    
        return new Promise(async (resolve, reject) => {
         self.chain.map(async (block) => {
            try {
              let isValid = await block.validate();
              if (!isValid) {
                errors.push(new Error(`The block ${block.height} is not valid`));
              }
            } catch (err) {
              errors.push(err);
            }
          });
    
          resolve(errors);
        });
      }

    //Vamos a imprimir todos los bloques de la cadena.
    print(){
        let self = this;
        for (let block of self.chain){
            console.log(block.toString());
        }
    }

}

module.exports = Blockchain;