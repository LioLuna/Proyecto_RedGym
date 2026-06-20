import { Router } from "express";
import { getUsuarios, getMiCuenta } from "../controllers/usuarios.controller.js";

import {verifyToken} from "../middlewares/verifyToken.js";

const router = Router();

router.get("/", getUsuarios);

router.get("/mi-cuenta", verifyToken, getMiCuenta);

export default router;