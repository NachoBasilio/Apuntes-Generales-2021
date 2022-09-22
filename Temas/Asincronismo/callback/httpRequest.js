const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = "https://pokeapi.co/api/v2/pokemon"

function fetchData(url, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText));
        }else{
            const error = new Error('Error' + API)
            return callback(error, null);
        }
    }
    xhttp.send()
}

fetchData(`${API}/ditto`, function(err1, data1) {
    if(err1){return console.error(err1)}
    console.log(data1);
})
