const Tarefa = require("../models/Tarefa");
const tarefa = (app, bd) => {
  app.get("/tarefas", (req, res) => {
    res.status(200).json({
      tarefas: bd.tarefa,
    });
  });
  app.post("/tarefas",(req, res) => {
      const body = req.body;
      try {
        const nova_tarefa = new Tarefa(body.titulo,body.descricao,body.status);
        bd.tarefa.push(nova_tarefa);

        res.status(201).json({
          "requisicao": nova_tarefa,
          "error": false,
        });
      } catch (error) {
        res.status(400).json({
          "error": true,
        });
      }
  });
};
module.exports = tarefa; 
