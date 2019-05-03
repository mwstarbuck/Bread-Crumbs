const express = require('express')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
const PORT = 8080

server.use(cors())
server.use(bodyParser.json())
//server.use(bodyParser.urlencoded({ extended: false }))
let coordinates = []

server.post('/api/location', (req, res) => {
    let latitude = req.body.latitude
    let longitude = req.body.longitude
    let location = models.HikeRecord.build({
        latitude: latitude,
        longitude: longitude
    })
    location.save().then((savedLocation) => {
    }).then(() => {
        res.json({ success: true, message: "location was added" })
    }).catch(error => res.json({ success: false, message: "location was not added" }))
})

server.get('/api/location', (req, res) => {
    models.HikeRecord.findAll().then((locations) => {
        res.json(locations)

    })
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
})