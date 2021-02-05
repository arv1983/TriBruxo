import "./App.css";
import { Component } from "react";
import CharacterList from "./components/CharacterList";
import React from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      escolhidos: [],
    };
  }

  componentDidMount = () => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ character: response });
        this.bruxos();
      })
      .catch((error) => console.log(error));
  };

  bruxos = () => {
    let tamanho = this.state.character.length;
    let numeros = [];
    let array = [];

    for (let i = 0; i < 1000; i++) {
      var aleatorio = Math.floor(Math.random() * tamanho);
      if (numeros.indexOf(aleatorio) === -1) numeros.push(aleatorio);
      if (numeros.length === 3) break;
    }

    for (let i = 0; i < 3; i++) {
      array.push(this.state.character[numeros[i]]);
    }

    this.setState({
      escolhidos: array,
    });
  };

  render() {
    const estilo = {
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      border: "1px solid #ccc",
      flexDirection: "row",
      flexWrap: "nowrap",
    };
    return (
      <>
        <div>
          Os bruxos de Hogwarts (Links to an external site.) estão ansiosos para
          as Preparatórias do Torneio Tribruxo. Três alunos (students) foram
          escolhidos para o Torneio de preparatória, neste torneio apenas um
          student sairá triunfante. Quem será o vencedor ?
        </div>
        <div style={{ flexDirection: "row" }}>
          <CharacterList style={estilo} lista={this.state.escolhidos} />
        </div>
      </>
    );
  }
}
