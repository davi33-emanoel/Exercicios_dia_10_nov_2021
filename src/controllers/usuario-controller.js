const usuario = (app)=>{
    app.get('/usuario',(req, res)=>{
        res.status(200).json({
         "itens": "ESTA PERDIDO AMIGO???",
         "status": "https://www.youtube.com/watch?v=f-d0vzlUCzk"
      })})
      app.post("/usuario",(req, res) => {
        res.status(200).json({
            "eai": "rota post"
        })
    })
}
  module.exports= usuario