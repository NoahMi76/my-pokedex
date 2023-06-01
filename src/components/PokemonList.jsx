import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Input, InputGroup, InputLeftElement  } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Tooltip } from '@chakra-ui/react'

const PokemonList = () => {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        // Récupérer les données des 151 premiers Pokémon depuis l'API PokeAPI
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

  // Gérer le changement de recherche
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtrer la liste des Pokémon en fonction de la recherche
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      
      {/* Champ de saisie */}
      <InputGroup mb={4}>
        <InputLeftElement>
         <Tooltip hasArrow label='Rechercher'>
         <SearchIcon />
       </Tooltip>
       </InputLeftElement>
        <Input
         focusBorderColor='red.400'  
          placeholder="Rechercher un Pokémon"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </InputGroup>

      <div className="pokemon-grid">
        {filteredPokemonList.map((pokemon) => {
          const id = pokemon.url.split("/")[6]; // Obtenir l'ID à partir de l'URL
          return (
            <PokemonCard key={id} pokemon={pokemon} index={id} />
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;

