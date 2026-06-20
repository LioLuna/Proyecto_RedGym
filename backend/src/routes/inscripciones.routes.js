import { Router } from "express";
import { createInscripcion, getInscripciones } from "../controllers/inscripciones.controller.js";

const router = Router();

router.get("/", getInscripciones);

router.post("/", createInscripcion);

export default router;