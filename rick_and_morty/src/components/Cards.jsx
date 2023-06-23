import Card from "./Card";

import "./cards.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div key={"222"} class="carta">
      {characters.map((character) => {
        return (
          <Card
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
        );
      })}
    </div>
  );
}
