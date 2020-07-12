const router = require('express').Router()
const CardController = require('../controllers/cardController')

router.get('/', CardController.fetchCard)

module.exports = router