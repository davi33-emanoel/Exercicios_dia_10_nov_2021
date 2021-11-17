const express = require('express')
const app = express()
const port = 3002
const middleware = require('./controllers/middlewares')
const tarefa = require('./controllers/tarefa-controller')
const usuario = require ('./controllers/usuario-controller')
const bd = require('./database/bd')

middleware(app)
tarefa(app,bd)
usuario(app,bd)
app.listen(3002, console.log(`servidor rodando na porta 3002, link http://localhost:${port}/`))