const http = require('http')
const express = require('express')
const app = express()




app.use('/users', (req,res, next) => {
    res.send('<h4>hey ya by outkast is the users favorite song</h4>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>HOWDY JAKE</h1>')
})

const server = http.createServer(app);

server.listen(3000)