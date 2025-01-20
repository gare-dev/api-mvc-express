const ClienteModel = require("../models/ClienteModel");

const clienteController = {
  getAllClients: async (req, res) => {
    try {
      const clientes = await ClienteModel.getAllClients();
      res.status(200).json(clientes);
    } catch (e) {
      res.status(500).json({ message: "Erro ao obter lista de clientes" });
    }
  },

  createNewClient: async (req, res) => {
    const { nome, cpf } = req.body;
    try {
      const newCliente = await ClienteModel.createNewClient(nome, cpf);
      res.status(201).json({ newCliente, message: "Sucesso!" });
    } catch (e) {
      res.status(500).json({ message: "Erro ao criar novo cliente", error: e });
    }
  },
};

module.exports = clienteController;
