import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
/*

const db = mysql
  .createPool({
    host: "127.0.0.1",
    user: "depas",
    password: "xxx!",
    database: "burghero",
  })
  .promise();
  */

const db = mysql
  .createPool({
    host: "sql11.freesqldatabase.com",
    user: "sql11678103",
    password: "aDxRygS6nE",
    database: "sql11678103",
  })
  .promise();

app.get("/api/ordini", async (_req, res) => {
  try {
    const [result, row] = await db.query("SELECT * FROM ordini");
    res.json({ data: result });
  } catch (error) {
    console.error("Errore durante l'esecuzione della query:", error);
    res
      .status(500)
      .json({ error: "Errore del server", details: error.message });
  }
});

app.delete("/api/ordini/:cliente", async (req, res) => {
  const cliente = req.params.cliente;
  try {
    const [result] = await db.query("DELETE FROM ordini WHERE cliente = ?", [
      cliente,
    ]);
    if (result.affectedRows > 0) {
      res.json({ success: true, message: "Ordine cancellato con successo" });
    } else {
      res.status(404).json({
        success: false,
        message: "Errore nella cancellazione dell'ordine",
      });
    }
  } catch (error) {
    console.error("Errore durante l'esecuzione della query:", error);
    res
      .status(500)
      .json({ error: "Errore del server", details: error.message });
  }
});

app.post("/api/ordini/", async (req, res) => {
  const nuovoCliente = req.body.nomeCliente;
  const nuovoOrdine = req.body.ordine;
  try {
    const [result] = await db.query(
      "INSERT INTO ordini (cliente, ordine) VALUES (?, ?)",
      [nuovoCliente, nuovoOrdine]
    );

    if (result.affectedRows > 0) {
      res.json({
        success: true,
        message: "Campo cliente inserito con successo",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Errore nell'aggiornamento del campo cliente",
      });
    }
  } catch (error) {
    console.error("Errore durante l'esecuzione della query:", error);
    res
      .status(500)
      .json({ error: "Errore del server", details: error.message });
  }
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
