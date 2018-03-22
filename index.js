
const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const reqPromise = require('request-promise')

// Counter for page views
let count = 0

const app = express()
const path = require('path')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile('/index.html')
// })

app.get('/counter', (req, res) => {
    console.log("counter")
    count++
    const countObj = { counter: count }

    res.json(countObj)
})

app.get('/start', (req, res) => res.sendFile(path.join(__dirname, 'public', 'start.html')))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
