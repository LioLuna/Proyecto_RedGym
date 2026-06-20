import { getUsuariosService, getMiCuentaService } from "../services/usuarios.service.js";

export const getUsuarios = async (req, res) => {

  try {

    const usuarios = await getUsuariosService();

    res.json(usuarios);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const getMiCuenta = async (req, res) => {

  try {

    const cuenta = await getMiCuentaService(
      req.user.id
    );

    res.json(cuenta);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};