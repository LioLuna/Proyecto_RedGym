import { registerUser } from "../services/auth.service.js";
import {loginUser} from "../services/auth.service.js";

export const register = async (req, res) => {
  try {

    const id = await registerUser(req.body);

    res.status(201).json({
      message: "Usuario registrado correctamente",
      idUsuario: id
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const data = await loginUser(
      email,
      password
    );

    res.status(200).json(data);

  } catch (error) {

    res.status(401).json({
      message: error.message
    });

  }

};