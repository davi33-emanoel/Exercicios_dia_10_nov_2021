const tarefa = (app)=>{
    app.get("/tarefas",(req, res)=>{
        res.status(200).json({
         "itens": "E AI MEU CHAPA",
         "status": "BLOOP FISH"
    })
})
app.post("/tarefas"),(req, res) => {
    res.status(200).json({
        "eai": "rota post"
    })
}}
module.exports = tarefa
