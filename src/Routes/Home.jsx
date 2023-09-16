import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/ContextGlobal";
import styles from "./Home.module.css";
function Home() {
  const temaContext = useContext(ContextGlobal);
  const [users, setUsers] = useState([]);
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
    } else {
      let user = users.find((user) => user.name === name);
      let newFavs = [...favs, user];
      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
    }
  }
  console.log(favs);

  async function handleFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(
      data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
        };
      })
    );
  }

  useEffect(() => {
    handleFetch();
  }, []);

  console.log(temaContext.theme);

  function handleDetails(nombre){
    console.log(nombre);
    let usuario = users.find(user => user.name===nombre)
    localStorage.setItem(`user`,JSON.stringify(usuario))

  }

  return (
    <div className={temaContext.theme}>
      <div className={styles.home}>
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              nombre={user.name}
              username={user.username}
              handleFav={handleFav}
              handleDetails={handleDetails}
              esFav={favs.find((fav) => fav.name === user.name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
