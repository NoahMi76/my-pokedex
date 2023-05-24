import React from "react";
import PokemonButton from "./PokemonButton";

const PokemonImage = ({ pokemon, index, onAddToTeam }) => {
  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt={pokemon.name}
      />
      <h2>{`${index}. ${pokemon.name}`}</h2>
      <PokemonButton onClick={() => onAddToTeam(pokemon.name)} />
    </div>
  );
};

export default PokemonImage;
