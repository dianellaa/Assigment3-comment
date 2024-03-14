const express = require('express')
const app = express()
require('./module/mongo')
require('./module/coment')
const routes = require('./routes')  

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(routes)
let port = process.env.PORT
app.listen(port, console.log(`app is on ${port}`))
