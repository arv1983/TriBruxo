import { Component } from "react";
import { Character } from "./Character";

export default class CharacterList extends Component {
  render() {
    const { lista } = this.props;
    const estilo = {
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      border: "3 px solid #ccc",
      flexDirection: "row",
      flexWrap: "nowrap",
      backgroundcolor: "black",
    };
    return (
      <div>
        {lista.map((item, index) => (
          <Character
            style={estilo}
            key={index}
            name={item.name}
            house={item.house}
            alive={item.alive}
          />
        ))}
      </div>
    );
  }
}
