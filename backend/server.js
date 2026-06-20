import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(
    `Servidor ejecutándose en puerto ${process.env.PORT}`
  );
});
import pool from "./src/database/db.js";

async function testDB() {
  try {
    const connection = await pool.getConnection();

    console.log("Base de datos conectada");

    connection.release();
  } catch (error) {
    console.error(error);
  }
}

testDB();