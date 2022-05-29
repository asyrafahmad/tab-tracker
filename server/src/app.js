console.log('hello');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/status', (req, res) => {
//     res.send({
//         message: 'hi world'
//     })
// })

app.post('/register', (req, res) => {
    res.send({
        message: `Hello  ${req.body.email}, you have been Registered`,

    })
})

app.listen(process.env.PORT || 8081)