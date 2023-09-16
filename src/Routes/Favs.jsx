import { useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/ContextGlobal";
import { useContext } from "react";
import styles from "./Favs.module.css";
function Favs() {
  const temaContext = useContext(ContextGlobal);
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );
  function handleFav(name, esFav) {
    if (esFav) {
      localStorage.setItem(
        "favs",
        JSON.stringify(favs.filter((fav) => fav.name !== name))
      );
      setFavs(favs.filter((fav) => fav.name !== name));
    }
  }

  
  return (
    <div className={temaContext.theme}>
      <section className={styles.favs}>
        {favs.map((user) => {
          return (
            <Card
              key={user.id}
              nombre={user.name}
              username={user.username}
              handleFav={handleFav}
              esFav={favs.find((fav) => fav.name === user.name)}
            />
          );
        })}
      </section>
    </div>
  );
}


export default Favs;
