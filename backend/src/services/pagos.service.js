import pool from "../database/db.js";

export const getPagosService = async () => {

  const [rows] = await pool.query(`
    SELECT
      pa.id_pago,
      CONCAT(u.nombre, ' ', u.apellido) AS usuario,
      pl.nombre AS plan,
      pa.monto,
      pa.metodo_pago,
      pa.estado,
      pa.fecha_pago
    FROM pagos pa
    INNER JOIN usuarios u
      ON pa.id_usuario = u.id_usuario
    INNER JOIN inscripciones i
      ON pa.id_inscripcion = i.id_inscripcion
    INNER JOIN planes pl
      ON i.id_plan = pl.id_plan
    ORDER BY pa.fecha_pago DESC
  `);

  return rows;
};

export const updateEstadoPagoService = async (
  id,
  estado
) => {

  await pool.query(
    `
    UPDATE pagos
    SET estado = ?
    WHERE id_pago = ?
    `,
    [
      estado,
      id
    ]
  );

};