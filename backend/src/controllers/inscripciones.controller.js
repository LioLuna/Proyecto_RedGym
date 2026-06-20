import { createInscripcionService, getInscripcionesService } from "../services/inscripciones.service.js";

export const createInscripcion = async (req, res) => {
  try {

    const result = await createInscripcionService(req.body);

    res.status(201).json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const getInscripciones = async (req, res) => {
  try {

    const inscripciones =
      await getInscripcionesService();

    res.json(inscripciones);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};