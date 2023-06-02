import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Box, Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchQuery.toLowerCase())
  );

  return (
    <Box
    bgGradient="linear(to-l, #5ABBA1, #CDC718 )"
      minHeight="100vh"
      p={4}
    >
      <InputGroup mb={4} bg="white" borderRadius="md">
        <InputLeftElement pointerEvents="none">
          <Tooltip hasArrow label="Rechercher">
            <SearchIcon color="gray.300" />
          </Tooltip>
        </InputLeftElement>
        <Input
          focusBorderColor="gray.500"
          placeholder="Rechercher un Pokémon"
          value={searchQuery}
          onChange={handleSearchInputChange}
          bg="white"
        />
      </InputGroup>

      <SimpleGrid columns={3} spacing={4}>
        {filteredPokemonList.map((pokemon) => {
          const id = pokemon.url.split("/")[6];
          return <PokemonCard key={id} pokemon={pokemon} index={id} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default PokemonList;
