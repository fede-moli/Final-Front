import { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ nombre, username, esFav, handleFav, handleDetails }) {
  const [fav, setFav] = useState(esFav);
  function handleClick() {
    setFav(!esFav);
    handleFav(nombre, esFav);
  }

  return (
    <div className={styles.card}>
      <Link to={`/detail/${nombre}`} onClick={()=>handleDetails(nombre)}>
        <h2>{nombre}</h2>
        <p>{username}</p>
        <img src="./public/images/doctor.jpg" className={styles.cardimg} /></Link>


      <button onClick={handleClick}>
        {fav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
      </button>
    </div>
  );

}

export default Card;
