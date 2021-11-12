const express = require('express')
const middleware = (app) => {
    app.use(express.json())
    app.use((req, res, next) => {
        const body = req.body
        console.log(body)
        if(!body.usuario){
            res.status(403).json({ message:"Você precisa ter um usuario."})
        }
        if(body.usuario === "cinthia"){
            res.status(403).send({ message:"Você não pode entrar cinthia."})
        }
        else{
            next();
        }
    })
}
module.exports = middleware;