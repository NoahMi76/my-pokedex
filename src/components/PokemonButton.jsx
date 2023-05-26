import React from "react";
import "./PokemonButton.css";




const PokemonButton = ({ onClick }) => {
  
  return <button className="pokemon-button" onClick={onClick}>Ajouter au Pokédex</button>;
};

export default PokemonButton;
