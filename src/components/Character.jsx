import { Component } from "react";

export class Character extends Component {
  render() {
    const estilo = {
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      border: "3px solid #ccc",
      flexDirection: "column",
      flexWrap: "nowrap",
    };
    let vivo = this.props.alive ? "Vivo" : "morto";
    return (
      <div style={estilo}>
        <div>Nome: {this.props.name}</div>
        <div>Casa: {this.props.house}</div>
        <div>Vivo: {vivo}</div>
      </div>
    );
  }
}
