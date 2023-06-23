import axios from "axios";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  // const  onSearch =(id)=> {
  //      setcharacters([...characters ,example])
  // }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
