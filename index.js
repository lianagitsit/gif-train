
const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const reqPromise = require('request-promise')
const path = require('path')

// Counter for page views
let count = 0

// Object for passing form data across views
let nameObj = {}

const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))
// app.use(express.static('javascript'))

// app.get('/', (req, res) => {
//     res.sendFile('/index.html')
// })

app.get('/counter', (req, res) => {
    count++
    const countObj = { counter: count }
    res.json(countObj)
})

app.get('/start', (req, res) => res.sendFile(path.join(__dirname, 'public', 'start.html')))

app.post('/welcome', urlencodedParser, (req, res) => {
    nameObj = { name: req.body.nameInput }
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'))
})

app.get('/getName', (req, res) => {
    res.json(nameObj)
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
