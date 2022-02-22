// index.js
import React from "react";
import ReactDOM from "react-dom";
import stacks from "./img/stacks.png";

const imagem = (
  <div className="img">
    <img src={stacks} alt="icons for html5, css3, javascript and react" />
  </div>
);

const form = (
  <div className="wrapper">
    <h3>Subscribe</h3>
    <p>Sign up with your email address to receive news and updates</p>
    <form>
      <input type="text" name="first-name" placeholder="First Name"></input>
      <input type="text" name="last-name" placeholder="Last Name"></input>
      <input type="email" name="email" placeholder="E-mail"></input>
      <input id="btn" type="button" value="Subscribe"></input>
    </form>
  </div>
);

const challenge3 = (
  <div className="wrapper-3">
    <div>
      <div className="picture"></div>
      <p>Margarete Freitas</p>
      <small>Jr. Front-end Developer, Brazil</small>
    </div>
    <p>Skills</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>SQL</li>
      <li>React</li>
      <li>NextJs</li>
      <li>PHP</li>
      <li>Git</li>
    </ul>
    <footer>
      <span>Joined on Feb 2, 2022</span>
    </footer>
  </div>
);

// JSX element, app
const App = (
  <div className="app">
    {form}
    {imagem}
    {challenge3}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(App, rootElement);
