import React from "react";
import PokemonButton from "./PokemonButton";

const PokemonImage = ({ pokemon, index, onAddToTeam }) => {
  const handleAddToTeam = () => {
    console.log(pokemon.name)
  };

  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt={pokemon.name}
      />
      <h2>{`${index}. ${pokemon.name}`}</h2>
      <PokemonButton onClick={handleAddToTeam}/>
    </div>
  );
};

export default PokemonImage;

