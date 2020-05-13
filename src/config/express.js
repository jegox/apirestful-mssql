const express = require("express")
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const router = express.Router()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', router)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Something broke!')
});

require('../routes')(router)
exports.app = app