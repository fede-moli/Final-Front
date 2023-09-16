import { useState } from "react";
import styles from "./Form.module.css";
export default function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();
    if (nombre[0] === " ") {
      setAlerta("El nombre no puede comenzar con un espacio");
    } else if (nombre.length < 6) {
      setAlerta("El nombre debe tener más de 5 caracteres");
    } else {
      setAlerta(`${nombre}! Un asesor se contactara a su email ${email}.`);
      setNombre("");
      setEmail("");
    }
  }

  return (
    <form className={styles.form} onSubmit={manejarSubmit}>
      <label htmlFor="nombre">Ingrese su Nombre completo: </label>
      <input
        type="text"
        id="nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <label htmlFor="email">Ingrese un e-mail de contacto: </label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit">Solicitar Contacto</button>
      {alerta ? <div>{alerta}</div> : undefined}
    </form>
  );
}
