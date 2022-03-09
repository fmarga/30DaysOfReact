import React from "react";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <h1>Welcome to 30 Days of React</h1>
        <p>Getting started React</p>
        <span>JavaScript Library</span>
        <small>March 4, 2022</small>
      </header>
    );
  }
}

const Button = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

class Main extends React.Component {
  render() {
    const { greetPeople, changeBackground } = this.props;
    return (
      <main className="mainContainer">
        <h3>Prerequisite to get started react.js:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <Button
          text="Change Background"
          onClick={changeBackground}
          style={buttonStyles}
        />
        <Button
          text="Greet People"
          onClick={greetPeople}
          style={buttonStyles}
        />
      </main>
    );
  }
}
class App extends React.Component {
  state = {
    styles: {
      backgroundColor: "",
      color: "",
    },
  };

  changeBackground = () => {
    let stylesDark = {
      backgroundColor: "#222",
      color: "white",
    };
    let stylesWhite = {
      backgroundColor: "#fff",
      color: "black",
    };
    return this.state.styles === stylesWhite ? stylesDark : stylesWhite;
  };

  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2022");
  };

  render() {
    return (
      <>
        <Header />
        <Main
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
        />
      </>
    );
  }
}

export default App;
