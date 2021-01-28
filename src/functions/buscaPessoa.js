const fetch = require('node-fetch')

module.exports = async function buscaPersonagem(pessoa){
const response = await fetch(`https://api.github.com/users/${pessoa}`)
    const json = await response.json()

    return json
}

