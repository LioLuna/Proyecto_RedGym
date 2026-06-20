import pool from "../database/db.js";

export const createPlanService = async (data) => {

  const {
    nombre,
    descripcion,
    precio,
    duracion_dias
  } = data;

  const [result] = await pool.query(
    `
    INSERT INTO planes
    (
      nombre,
      descripcion,
      precio,
      duracion_dias
    )
    VALUES (?, ?, ?, ?)
    `,
    [
      nombre,
      descripcion,
      precio,
      duracion_dias
    ]
  );

  return result.insertId;
};

export const updatePlanService = async (
  id,
  data
) => {

  const {
    nombre,
    descripcion,
    precio,
    duracion_dias
  } = data;

  await pool.query(
    `
    UPDATE planes
    SET
      nombre = ?,
      descripcion = ?,
      precio = ?,
      duracion_dias = ?
    WHERE id_plan = ?
    `,
    [
      nombre,
      descripcion,
      precio,
      duracion_dias,
      id
    ]
  );

};


export const disablePlanService = async (
  id
) => {

  await pool.query(
    `
    UPDATE planes
    SET estado = 'inactivo'
    WHERE id_plan = ?
    `,
    [id]
  );

};