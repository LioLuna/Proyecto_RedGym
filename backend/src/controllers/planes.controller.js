import pool from "../database/db.js";
import {createPlanService,disablePlanService, updatePlanService} from "../services/planes.service.js";


export const getPlanes = async (req, res) => {
  try {
    const [planes] = await pool.query(
      "SELECT * FROM planes WHERE estado = 'activo'"
    );

    res.json(planes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getPlanById = async (req, res) => {

  try {

    const { id } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM planes WHERE id_plan = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Plan no encontrado",
      });
    }

    res.json(rows[0]);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

export const createPlan = async (req, res) => {

  try {

    const id =
      await createPlanService(req.body);

    res.status(201).json({
      message: "Plan creado",
      id
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const disablePlan = async (
  req,
  res
) => {

  try {

    await disablePlanService(
      req.params.id
    );

    res.json({
      message: "Plan desactivado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const updatePlan = async (req, res) => {

  try {

    const { id } = req.params;

    const {
      nombre,
      precio,
      descripcion,
      duracion_dias
    } = req.body;

    await pool.query(
      `
      UPDATE planes
      SET
        nombre = ?,
        precio = ?,
        descripcion = ?,
        duracion_dias = ?
      WHERE id_plan = ?
      `,
      [
        nombre,
        precio,
        descripcion,
        duracion_dias,
        id
      ]
    );

    res.json({
      message: "Plan actualizado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};