import {
  crearNotificacionGeneralService,
  getNotificacionesUsuarioService
} from "../services/notificaciones.service.js";

export const crearNotificacionGeneral = async (
  req,
  res
) => {

  try {

    const {
      titulo,
      mensaje
    } = req.body;

    await crearNotificacionGeneralService(
      titulo,
      mensaje
    );

    res.json({
      message: "Notificación enviada"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const getMisNotificaciones = async (
  req,
  res
) => {

  try {

    const notificaciones =
      await getNotificacionesUsuarioService(
        req.user.id
      );

    res.json(notificaciones);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};