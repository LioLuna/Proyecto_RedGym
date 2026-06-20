import pool from "../database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (userData) => {
  const {
    nombre,
    apellido,
    email,
    password,
    telefono
  } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const [result] = await pool.query(
    `INSERT INTO usuarios
    (nombre, apellido, email, password, telefono)
    VALUES (?, ?, ?, ?, ?)`,
    [
      nombre,
      apellido,
      email,
      hashedPassword,
      telefono
    ]
  );

  return result.insertId;
};

export const loginUser = async (email, password) => {

  const [users] = await pool.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );

  const user = users[0];

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Contraseña incorrecta");
  }

  const token = jwt.sign(
    {
      id: user.id_usuario,
      rol: user.rol
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h"
    }
  );

  return {
    token,
    user: {
      id: user.id_usuario,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      rol: user.rol
    }
  };
};