import React from "react";
import "./PokemonButton.css";

const PokemonButton = ({ onClick }) => {
  return <button className="pokemon-button" onClick={onClick}>Add to Team</button>;
};

export default PokemonButton;
