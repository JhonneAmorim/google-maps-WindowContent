const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.get("/api-key", (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});
