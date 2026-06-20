import pool from "../database/db.js";

export const crearNotificacionGeneralService = async (
  titulo,
  mensaje
) => {

  const [usuarios] = await pool.query(`
    SELECT DISTINCT
      u.id_usuario
    FROM usuarios u
    INNER JOIN inscripciones i
      ON u.id_usuario = i.id_usuario
    WHERE i.estado = 'activa'
  `);

  for (const usuario of usuarios) {

    await pool.query(
      `
      INSERT INTO notificaciones
      (
        id_usuario,
        titulo,
        mensaje
      )
      VALUES (?, ?, ?)
      `,
      [
        usuario.id_usuario,
        titulo,
        mensaje
      ]
    );

  }

};

export const getNotificacionesUsuarioService = async (
  idUsuario
) => {

  const [rows] = await pool.query(
    `
    SELECT *
    FROM notificaciones
    WHERE id_usuario = ?
    ORDER BY fecha_envio DESC
    `,
    [idUsuario]
  );

  return rows;

};