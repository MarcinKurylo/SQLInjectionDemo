const express = require('express')
const path = require('path')
require('dotenv').config() // in order to use .env
const connection = require('./connection/connection.js') // connection with DB
const port = process.env.PORT
const app = express()
const router = require('./router/router.js')

app.set('view engine', 'ejs') // view engine setup
app.set('views', path.join(__dirname, 'views')) // define views dir
app.use(express.static(path.join(__dirname, 'public'))) // define public dir
app.use(express.urlencoded({extended:true})) // parse request 2 json
app.use('/', router) // routes

app.listen(port, () => {
    console.log(`LISTENING ON ${port}`)
})