
const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const reqPromise = require('request-promise')

// Counter for page views
let count = 0

const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/', (req, res) => {
    count++
    res.sendFile('public/index.html')
})

app.get('/counter', (req, res) => {
    const countObj = { counter: count }
    res.json(countObj)
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
