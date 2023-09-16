import { useState } from "react";

function Detail() {
  const [usuario, setUsuario] = useState(
JSON.parse(localStorage.getItem(`user`))


  )
  
  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>{usuario.username}</p>
      <p>{usuario.email}</p>
      <p>{usuario.phone}</p>
      <p>{usuario.website}</p>
    </div>
  );


}

export default Detail;


