import fetch from "node-fetch"
const PokeApi = "https://pokeapi.co/api/v2/pokemon"

const fetchPokemon = async (url, pokemon) =>{
    try{
        const response = await fetch(`${url}/${pokemon}`)
        const data = await response.json()
        console.log(data)
    }catch{
        return new Error(`Failed to fetchPokemon: ${JSON.stringify(response)}`)
    }
}

fetchPokemon(PokeApi, 52130)