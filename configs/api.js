const axios = require('axios')

const pokemonAPI = axios.create({
    baseURL: process.env.POKEMON_API
})

module.exports = pokemonAPI