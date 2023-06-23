import "./searchBar.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setid] = useState("");

  const handleChange = (event) => {
    setid(event.target.value);
  };

  return (
    <div class="contenedor">
      <input type="search" class="input" onChange={handleChange} />
      <button onClick={() => props.onSearch(id)} class="btn">
        <strong>agregar</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
    </div>
  );
}
