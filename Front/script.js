const getCharacters = async () => {
    const characterName = document.getElementById('characterName').value.toLocaleLowerCase()
    const results = document.getElementById('results')
    const urlAPI = `http://localhost:4000/characters/${characterName}`
    try {
    const response = await fetch(urlAPI)
    const data = await response.json()
    const template = `
    ${data.map(character => {
        const {name, status, species, gender, image, origin} = character
        return `
        <li>
        <img src=${image} alt=${name}
        <h2>${name}</h2>
        <p>Status: ${status}</p>
        <p>Species: ${species}</p>
        <p>Gender: ${gender}</p>
        <p>Origin: ${origin.name}</p>
        </li>
        `
    }).join("")}
    `
    results.innerHTML = template
    } catch(err) {
    console.log("Personaje no encontrado")
    results.innerHTML = "Personaje no encontrado"
    }
}
