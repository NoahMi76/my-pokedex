import React from "react";
import PokemonButton from "./PokemonButton";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, index}) => {
  const handleAddToTeam = () => {
    console.log(pokemon.name)
  };

const navigate = useNavigate()

  return (
    <div className="pokemon-card" onClick={() => navigate(`/pokemon/${index}`)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt={pokemon.name}
      />
      <h2>{`${index}. ${pokemon.name}`}</h2>
      <PokemonButton onClick={handleAddToTeam}/>
    </div>
  );
};

export default PokemonCard;

