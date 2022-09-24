import fetch from "node-fetch";
const PokeApi = "https://pokeapi.co/api/v2/pokemon"

fetch(PokeApi)
.then((response)=>{
    return response.json()
})
.then((pokemon)=>{
    console.log(pokemon)
})