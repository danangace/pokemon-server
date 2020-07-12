const { route } = require('./cardRouter')

const router = require('express').Router()
const cardRouter = require('./cardRouter')

router.use('/card', cardRouter)

module.exports = router