import { useState } from "react";

export default function ComunicadosAdmin() {

  const [titulo, setTitulo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarComunicado = async () => {

    try {

      const token = JSON.parse(
        localStorage.getItem("redgym.session")
      )?.token;

      const response = await fetch(
        "http://localhost:3000/api/v1/notificaciones/general",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            titulo,
            mensaje
          })
        }
      );

      const data = await response.json();

      alert(data.message);

      setTitulo("");
      setMensaje("");

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <section>

      <h1 className="text-3xl font-bold mb-6">
        Enviar Comunicado
      </h1>

      <div className="bg-zinc-950 border border-zinc-800 rounded p-6">

        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
          className="w-full p-3 rounded bg-zinc-900 mb-4"
        />

        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Mensaje"
          rows="6"
          className="w-full p-3 rounded bg-zinc-900 mb-4"
        />

        <button
          onClick={enviarComunicado}
          className="bg-red-600 px-6 py-3 rounded"
        >
          Enviar Comunicado
        </button>

      </div>

    </section>
  );
}