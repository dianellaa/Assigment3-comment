const express = require('express')
const routes = express.Router()
const articleFun = require('./postControl')
const comentFun = require('./ComentController')

require('./module/coment');

routes.get('/', articleFun.getHomePage)

routes.post('/home', articleFun.createArticle)

routes.post('/new/:id', comentFun.NewComent)



module.exports = routes 