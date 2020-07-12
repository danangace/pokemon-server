const pokemonAPI = require('../configs/api')

class CardController{

    static async fetchCard(req,res,next){
        try {
            const result = await pokemonAPI({
                url: '/cards',
                method: 'GET'
            })
            res.status(200).json(result.data)
        } catch (error) {
            next()
        }
    }
    
}

module.exports = CardController