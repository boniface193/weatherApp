const path = require('path')
const express = require('express')
const app = express()
const router = require('./src/routers/router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.set("views", "views")
app.set("view engine", "hbs")

app.use('/', router)

app.listen(2000, () => {
    console.log('listening on port 2000')
})