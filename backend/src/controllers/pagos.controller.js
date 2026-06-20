import { getPagosService, updateEstadoPagoService } from "../services/pagos.service.js";

export const getPagos = async (req, res) => {

  try {

    const pagos = await getPagosService();

    res.json(pagos);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
export const updateEstadoPago = async (
  req,
  res
) => {

  try {

    await updateEstadoPagoService(
      req.params.id,
      req.body.estado
    );

    res.json({
      message: "Estado actualizado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};