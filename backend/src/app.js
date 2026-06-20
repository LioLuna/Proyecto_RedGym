import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import planesRoutes from "./routes/planes.routes.js";
import inscripcionesRoutes from "./routes/inscripciones.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js";
import pagosRoutes from "./routes/pagos.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import notificacionesRoutes from "./routes/notificaciones.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/v1/notificaciones", notificacionesRoutes);

app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/api/v1/pagos", pagosRoutes);

app.use("/api/v1/planes", planesRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/usuarios", usuariosRoutes);

app.use("/api/v1/inscripciones", inscripcionesRoutes);

export default app;