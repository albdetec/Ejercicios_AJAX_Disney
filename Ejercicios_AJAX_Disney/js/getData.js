const character = document.getElementById("character")
const min = Math.ceil(1);
const max = Math.floor(500);
let numRandom = Math.floor(Math.random() * (max - min + 1) + min)
console.log(numRandom)

fetch(`https://api.disneyapi.dev/character/${numRandom}`)
    .then(function getResponse(response) {
        return response.json()
    })
    .then(function printObject(data) {
        let results = data.data
        if (results._id) {
            character.innerHTML =
            `<div class="img-container">
                <img src="${results.imageUrl}" alt="avatar" width="200">
            </div>
            <div class="txt-container">
                <h3>id: ${results._id}</h3>
            </div>
            <div>
                <h3>Nombre: ${results.name}</h3>
            </div>`

            //COMPRUEBO SI HAY PELÍCULAS
            if (results.films[0]) {
                character.innerHTML = character.innerHTML + 
                  `<div><h3>Películas</h3></div>`
                for (let i = 0; i < results.films.length; i++) {
                    character.innerHTML = character.innerHTML +
                        `<p>${results.films[i]}</p>`
                }
            }
        }
        else { character.innerHTML = `<h3>El personaje número: ${numRandom} no existe, ¡prueba otra vez!</h3>` }
    })

//2. Disney: Usa la api https://api.disneyapi.dev/characters/xxx para pedir un personaje aleatorio pasándole un número entre 001 y
//500 en vez del xxx.. Crea un div en el que aparezca la foto, el nombre y el id. Si estuviera disponible, enumerar las películas
//donde ha salido.
