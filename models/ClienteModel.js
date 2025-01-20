const db = require("../config/db");

const Cliente = {
  getAllClients: async () => {
    try {
      const query = "SELECT * FROM Cliente";
      const result = await db.query(query);
      return result.rows;
    } catch (e) {
      throw e;
    }
  },

  createNewClient: async (nome, cpf) => {
    try {
      const query =
        "INSERT INTO Cliente (nome, cpf) VALUES ($1, $2) RETURNING *";
      const values = [nome, cpf];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (e) {
      throw e;
    }
  },
};

module.exports = Cliente;
