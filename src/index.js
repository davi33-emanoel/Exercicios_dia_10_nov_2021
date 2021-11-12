const express = require('express')
const app = express()
const port = 3000
const middleware = require('./controllers/middlewares')
const tarefa = require('./controllers/tarefa-controller')
const usuario = require ('./controllers/usuario-controller')

middleware(app)
tarefa(app)
usuario(app)
app.listen(3000, console.log(`servidor rodando na porta 3000, link http://localhost:${port}/`))