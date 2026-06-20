import { Router } from "express";
import {verifyToken} from "../middlewares/verifyToken.js";
import {isAdmin} from "../middlewares/isAdmin.js";

import {
  getPlanes,
  getPlanById,
  createPlan,
  updatePlan,
  disablePlan
} from "../controllers/planes.controller.js";

const router = Router();

router.get("/", getPlanes);

router.get("/:id", getPlanById);

router.post(
  "/",
  verifyToken,
  isAdmin,
  createPlan
);

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  updatePlan
);

router.patch(
  "/:id/desactivar",
  verifyToken,
  isAdmin,
  disablePlan
);

export default router;