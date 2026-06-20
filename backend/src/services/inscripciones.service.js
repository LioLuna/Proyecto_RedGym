import pool from "../database/db.js";

export const createInscripcionService = async (data) => {

  const {
    email,
    id_plan,
    metodo_pago
  } = data;

  const [usuarios] = await pool.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );

  const usuario = usuarios[0];

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  const [planes] = await pool.query(
    "SELECT * FROM planes WHERE id_plan = ?",
    [id_plan]
  );

  const plan = planes[0];

  if (!plan) {
    throw new Error("Plan no encontrado");
  }

  const fechaInicio = new Date();

  const fechaVencimiento = new Date();

  fechaVencimiento.setDate(
    fechaInicio.getDate() +
    plan.duracion_dias
  );

  const [inscripcionResult] = await pool.query(
    `
    INSERT INTO inscripciones
    (
      id_usuario,
      id_plan,
      fecha_inicio,
      fecha_vencimiento
    )
    VALUES (?, ?, ?, ?)
    `,
    [
      usuario.id_usuario,
      id_plan,
      fechaInicio,
      fechaVencimiento
    ]
  );

  const estadoPago =
  metodo_pago == "debito" || metodo_pago == "credito"
    ? "aprobado"
    : "pendiente";

console.log({
  id_usuario: usuario.id_usuario,
  id_inscripcion: inscripcionResult.insertId,
  monto: plan.precio,
  metodo_pago,
  estadoPago
});
  await pool.query(
    `
    INSERT INTO pagos
    (
      id_usuario,
      id_inscripcion,
      monto,
      metodo_pago,
      estado
    )
    VALUES (?, ?, ?, ?, ?)
    `,
    [
      usuario.id_usuario,
      inscripcionResult.insertId,
      plan.precio,
      metodo_pago,
      estadoPago
    ]
  );

  return {
    message: "Inscripción creada correctamente"
  };
};

export const getInscripcionesService = async () => {

  const [rows] = await pool.query(`
    SELECT
      i.id_inscripcion,
      CONCAT(u.nombre, ' ', u.apellido) AS usuario,
      u.email,
      p.nombre AS plan,
      i.estado,
      i.fecha_inicio,
      i.fecha_vencimiento
    FROM inscripciones i
    INNER JOIN usuarios u
      ON i.id_usuario = u.id_usuario
    INNER JOIN planes p
      ON i.id_plan = p.id_plan
    ORDER BY i.id_inscripcion DESC
  `);

  return rows;
};