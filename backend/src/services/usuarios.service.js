import pool from "../database/db.js";

export const getUsuariosService = async () => {
  const [rows] = await pool.query(`
    SELECT
      id_usuario,
      nombre,
      apellido,
      email,
      rol
    FROM usuarios
  `);

  return rows;
};

export const getMiCuentaService = async (idUsuario) => {

  const [rows] = await pool.query(`
    SELECT
      u.nombre,
      u.apellido,
      u.email,
      p.nombre AS plan,
      i.estado AS estado_inscripcion,
      i.fecha_vencimiento,
      pa.estado AS estado_pago,
      pa.metodo_pago
    FROM usuarios u

    LEFT JOIN inscripciones i
      ON u.id_usuario = i.id_usuario

    LEFT JOIN planes p
      ON i.id_plan = p.id_plan

    LEFT JOIN pagos pa
      ON pa.id_inscripcion = i.id_inscripcion

    WHERE u.id_usuario = ?

    ORDER BY i.id_inscripcion DESC
    LIMIT 1
  `, [idUsuario]);

  return rows[0];
};