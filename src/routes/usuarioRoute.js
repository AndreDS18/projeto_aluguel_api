import express from "express";
import { buscarTodos, buscarUm, criar } from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send(await buscarTodos());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUm(req.params.id));
});

router.post("/", async (req, res) => {
    res.send(await criar(req.body));
});

export default router;