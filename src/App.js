import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonImage from "./components/PokemonImage";
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToTeam = (pokemonName) => {
    console.log({pokemonName});
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <PokemonImage
            key={pokemon.name}
            pokemon={pokemon}
            index={index + 1}
            onAddToTeam={handleAddToTeam}
          />
        ))}
      </div>
    </div>
  );
};

export default App;





