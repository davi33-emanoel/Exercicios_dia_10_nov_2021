const Usuario = require('../models/Usuario')
const usuario = (app,bd)=>{
    app.get('/usuario',(req, res)=>{
        res.status(200).json({
         "usuario":bd.usuario
      })})
      app.post("/usuario",(req, res) => {
            const body = req.body
            try{
               const novo_usuario = new Usuario(body.nome,body.email,body.senha)
               bd.usuario.push(novo_usuario)

               res.status(201).json({
                   "requisicao":novo_usuario,
                   "error":false
               })
            }
            catch (error){
                res.status(400).json({
                    "requisicao":novo_usuario,
                    "error":true
                })
            }
        })
    
}
  module.exports= usuario