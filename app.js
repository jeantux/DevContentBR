const express = require('express')
const server = express()
const dirSite = __dirname + '/www/'
const channelsModel = require('./model/channels.js')

server.use(express.static(dirSite))

server.get('/', (req, res) => {
    res.sendFile(dirSite+ 'index.html')
})

server.get('/channels', (req, res) => {
    res.json({ channels: channelsModel })
})

server.get('/about', (req, res) => {
    res.sendFile(dirSite+'about.html')
})

server.listen(5000, () => {
    console.log('Servidor executando!')
    console.log('http://localhost:5000')
})