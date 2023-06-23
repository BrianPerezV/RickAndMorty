import { useParams } from "react-router-dom";
import "./Detail.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const { characters } = useSelector((s) => s);
  useEffect(() => {
    const char = characters?.find((ch) => ch.id === Number(id));
    if (char) setCharacter(char);
    else window.alert("No hay personajes con ese ID");
  }, [characters, id]);

  return (
    <div>
      <div>
        <h3>Id: {id}</h3>
        <h1>{character.name}</h1>
        <h2>Status: {character.status}</h2>
        <p>Specie: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin?.name}</p>
      </div>
      <div>
        <img src={character.image} alt={character.name}></img>
      </div>
    </div>
  );
}
