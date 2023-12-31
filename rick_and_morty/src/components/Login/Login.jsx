import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Login({ login }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [inputsErrors, setInputsErrors] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate();

  const validate = (inputs) => {
    const errors = {};
    if (!inputs.email) errors.email = "Email is null";
    if (inputs.email.length < 6) errors.email = "Email contain 6 characters";

    if (!regExEmail.test(inputs.email)) errors.email = "Email Will be Email";
    if (!regexPassword.test(inputs.password)) errors.password = "Password ... ";
    if (inputs.password.length < 6)
      errors.password = "Password must contain 6 characters";
    if (!inputs.password) errors.password = "Password is null";
    return errors;
  };
  //! el set es ASYNC
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
      // email: dede
    });
    setInputsErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let aux = Object.keys(inputsErrors);
    // console.log("::::aux::", inputsErrors)
    if (aux.length === 0) {
      //TODO: tomá los inputs envialos a POST
      setInputs({
        email: "",
        password: "",
      });
      setInputsErrors({
        email: "",
        password: "",
      });
      login(inputs);

      // navigate("/home");
    } else {
      return alert("Error");
    }
  };
  return (
    console.log("--> ", inputs, inputsErrors),
    (
      <div class="conteinerForm">
        <form onSubmit={handleSubmit} class="form">
          <h1 class="title-2">Rick & Morty</h1>
          <section class="bg-stars">
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
          </section>
          
          {/* <div class="input-container">
        <input class="input-pwd" type="password" placeholder="Enter password">
      </div>
      <button type="submit" class="submit">
        <span class="sign-text">Sign in</span>
      </button> */}



          <div>
            <label class="form-title">Email: </label>
            <input
              class="input-pwd"
              type="text"
              key="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            ></input>
            <span class="signup-link">{inputsErrors?.email && inputsErrors.email}</span>
            <hr></hr>
            <label class="form-title">Password: </label>
            <input
              type="password"
              key="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            ></input>
            <span class="signup-link">{inputsErrors?.password && inputsErrors.password}</span>
          </div>

          
          {Object.keys(inputsErrors).length === 0 ? (
            <button type="submit" >Ingresar</button>
          ) : null}

          <Link to="/home" >
            <button class="up">Ingresar</button>
          </Link>
        </form>
      </div>
    )
  );
}
