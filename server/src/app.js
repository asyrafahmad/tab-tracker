console.log('Start Server');

const express = require('express')            // server
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')              // HTTP request logger middleware for node.js

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

// ---------------------------------------------------------------------------------------------------

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)                      // import from routes.js

// sequelize.sync({force: true})              //  AWARE : to clear all the database and recreate
sequelize.sync()
    .then(() => {  
      app.listen(config.port)
      console.log(`Server started on port ${config.port}`)
    })
