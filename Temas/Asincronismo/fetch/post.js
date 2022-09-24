import fetch from "node-fetch";
const PokeApi = "https://pokeapi.co/api/v2/pokemon"

function postData(url, data){
    const response = fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    "pokemon": "Diego villasboas"
}

postData(PokeApi, data)
.then(res => res.json())
.then(data => console.log(data))