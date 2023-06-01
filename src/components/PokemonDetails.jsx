import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import PokemonButton from "./PokemonButton";


const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
        
      } catch (error) {
        console.log(error);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!pokemon) {
    return <p>Erreur dans l'API</p>;
  }

  const heightInMeters = pokemon.height / 10;
  const weightInKilograms = pokemon.weight / 10;

  return (
    <div className="pokemon-details-container">
      <div className="left-section">
        <h2 className="pokemon-name">{pokemon?.name}</h2>
        <img
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
          className="pokemon-image"
        />
      </div>
      <div className="right-section">
        <h2>Détails</h2>
        <p>Height: {heightInMeters} m</p>
        <p>Weight: {weightInKilograms}  kg</p>
        <p>Base Experience: {pokemon?.base_experience}</p>
          <p>Abilities: {pokemon?.abilities?.map((ability) => ability.ability.name).join(", ")}</p>
          <p>Types: {pokemon?.types?.map((type) => type.type.name).join(", ")}</p>
        <PokemonButton/>
        
    </div>
      <div className="right-section2">
      <h2>Stats:</h2>
      {pokemon?.stats.map(stat => (
        <p key={stat.stat.name}>
          {stat.stat.name}: {stat.base_stat}
        </p>
      ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
