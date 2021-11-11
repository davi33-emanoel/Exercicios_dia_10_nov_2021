const express = require('express')
const app = express()
const port = 3001
const tarefa = require('./controllers/tarefa-controller')
const usuario = require ('./controllers/usuario-controller')
const ai= require('./controllers/um_ai-controller')

app.get ('/seila', ai)
app.get ('/tarefas', tarefa)
app.get ('/usuario', usuario)
app.listen(3001, console.log(`servidor rodando na porta 3001, link http://localhost:${port}/`))