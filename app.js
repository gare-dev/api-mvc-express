const express = require("express");
const clienteController = require("./controllers/clienteController");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/clientes", clienteController.getAllClients);
app.post("/api/clientes", clienteController.createNewClient);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
