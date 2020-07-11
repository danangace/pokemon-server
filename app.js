// set environment variable
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

// connection to database
require('./configs/mongoose')

// require modules
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

// apps
const app = express()

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// routes
app.use(routes)

// errorHandler
app.use(errorHandler)

module.exports = app