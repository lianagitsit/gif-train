
const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const reqPromise = require('request-promise')
const path = require('path')

// Counter for page views
let count = 0

// Object for passing form data across views
let nameObj = {}

let resultsObj = {}

const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('javascript'))
app.use(express.static('public'))

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

app.get('/getName', (req, res) => res.json(nameObj))

app.post('/display', urlencodedParser, (req, res) => {
    resultsObj = { results: req.body.topicInput }
    res.sendFile(path.join(__dirname, 'public', 'display.html'))
})

app.get('/results', (req, res) => {
    const topic = resultsObj.results
    reqPromise('http://api.giphy.com/v1/gifs/search?q='+topic+'&api_key=CymhH6SlUPj3Xk8g8Y115zIFK0lyCDhV&limit=5')
    .then((response) => {
        res.json(response)
    }).catch((err) => {
        console.error(err)
    })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
