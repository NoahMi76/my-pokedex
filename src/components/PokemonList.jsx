import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Box, Input, InputGroup, InputLeftElement, SimpleGrid, IconButton, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"; // Importation de l'icône de Pokéball

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
      bg="url('https://img.freepik.com/photos-gratuite/volume-resume-graphique-solitude-bureau_1258-258.jpg?w=1380&t=st=1685716626~exp=1685717226~hmac=dff7acff911948a9497853018704e3c5b6f81f72f10a8d8320872bc13ef31c09')"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      p={4}
    >
      <InputGroup mb={4} bg="white" borderRadius="md">
        <InputLeftElement pointerEvents="none">
          <Tooltip hasArrow label="Rechercher">
            <SearchIcon color="primary.400" />
          </Tooltip>
        </InputLeftElement>
        <Input
          focusBorderColor="primary.400"
          placeholder="Rechercher un Pokémon"
          value={searchQuery}
          onChange={handleSearchInputChange}
          bg="white"
        />
        <Link to="/pokedex">
          <IconButton
            ml={2}
            colorScheme="primary"
            aria-label="Accéder au Pokédex"
            icon={<Icon as={FiShoppingCart} boxSize={25} />} //Shop Icon
          />
        </Link>
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
