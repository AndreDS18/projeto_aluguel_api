import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

// Interceptadores
app.use(cors()); // permite que endereços externos façam requisições
app.use(express.json()); // transforma o corpo da requisição em objeto javascript


// Rotas
app.get("/", (req ,res) => {
    res.send("Bem-vindo à API Aluga Web")
})

app.listen(port, () => {
    console.log(`Servidor de pé: http://localhost:${port}`);
})