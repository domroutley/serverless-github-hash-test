const express = require('express')
const helmet = require('helmet')
const beta = require('./function')
const app = express()

app.use(helmet())

app.post('/one', beta.one)
app.post('/two', beta.two)

const port = 3000
const server = app.listen(port)
