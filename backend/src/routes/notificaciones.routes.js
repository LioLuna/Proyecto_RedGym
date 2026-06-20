import { Router } from "express";

import {
  crearNotificacionGeneral,
  getMisNotificaciones
} from "../controllers/notificaciones.controller.js";

import { verifyToken } from "../middlewares/verifyToken.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.post(
  "/general",
  verifyToken,
  isAdmin,
  crearNotificacionGeneral
);

router.get(
  "/mis-notificaciones",
  verifyToken,
  getMisNotificaciones
);

router.get("/test", (req, res) => {
  res.json({
    message: "Notificaciones funcionando"
  });
});
export default router;