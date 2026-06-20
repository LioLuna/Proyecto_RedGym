import { Router } from "express";
import { getPagos,updateEstadoPago } from "../controllers/pagos.controller.js";
import {verifyToken} from "../middlewares/verifyToken.js";
import {isAdmin} from "../middlewares/isAdmin.js";

const router = Router();

router.get("/", getPagos);

router.patch(
    "/:id/estado",
    verifyToken,
    isAdmin,
    updateEstadoPago
);

export default router;