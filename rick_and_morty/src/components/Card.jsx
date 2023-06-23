import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  const { origin, gender, status, species, name, id, onClose } = props;

  const containerStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover , auto",

    width: "250px",
    height: "250px",
  };
  const containerStyleBack = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover , auto",
    backdropFilter: "blur(50px)",

    width: "250px",
    height: "250px",
    color: "black",
  };

  return (
    <div key={id} class="contenedor-card">
      {/* <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt="" /> */}

      <Link to={`/detail/${id}`}>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front" style={containerStyle}>
              <p class="title">{name}</p>
              <p>{species}</p>
            </div>
            <div class="flip-card-back" style={containerStyleBack}>
              <p class="title">{status}</p>
              <p>{gender}</p>
              <p>{origin}</p>
            </div>
          </div>
        </div>
        <button class="btn-card" onClick={() => onClose(id)}>
          <svg
            viewBox="0 0 15 17.5"
            height="17.5"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              transform="translate(-2.5 -1.25)"
              d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
              id="Fill"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
