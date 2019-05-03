const express = require('express')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 8080

server.use(cors())
server.use(bodyParser.json())
//server.use(bodyParser.urlencoded({ extended: false }))
let coordinates = []

server.post('/api/location', (req, res) => {
    let latitude = req.body.latitude
    let longitude = req.body.longitude

    let location = {
        latitude: latitude,
        longitude: longitude
    }
    coordinates.push(location)
    console.log(coordinates)
    res.json({ success: true, message: 'Location was added' })
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
})