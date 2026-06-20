import pool from "../database/db.js";

export const getDashboardStats = async () => {

  const [[usuarios]] = await pool.query(`
    SELECT COUNT(*) AS total
    FROM usuarios
  `);

  const [[inscripciones]] = await pool.query(`
    SELECT COUNT(*) AS total
    FROM inscripciones
    WHERE estado = 'activa'
  `);

  const [[pagos]] = await pool.query(`
    SELECT COUNT(*) AS total
    FROM pagos
  `);

  const [[ingresos]] = await pool.query(`
    SELECT COALESCE(SUM(monto),0) AS total
    FROM pagos
    WHERE estado = 'aprobado'
  `);

  return {
    usuarios: usuarios.total,
    inscripciones: inscripciones.total,
    pagos: pagos.total,
    ingresos: ingresos.total
  };
};