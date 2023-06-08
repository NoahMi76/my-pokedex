import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const Pokedex = () => {
  const [savedPokemon, setSavedPokemon] = React.useState(
    JSON.parse(localStorage.getItem("pokedex")) || []
  );

  const removePokemon = (index) => {
    const updatedPokemon = [...savedPokemon];
    updatedPokemon.splice(index, 1);
    setSavedPokemon(updatedPokemon);
    localStorage.setItem("pokedex", JSON.stringify(updatedPokemon));
  };

  return (
    <Box p={8}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="2xl">
          Pokédex
        </Heading>
        {savedPokemon.length === 0 ? (
          <Text fontSize="xl">Aucun Pokémon ajouté au Pokédex.</Text>
        ) : (
          <VStack spacing={2} align="start">
            {savedPokemon.map((pokemon, index) => (
              <Text key={index}>
                {pokemon}
                <IconButton
                  ml={2}
                  colorScheme="red"
                  variant="outline"
                  icon={<DeleteIcon boxSize={5} />}
                  onClick={() => removePokemon(index)}
                />
              </Text>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default Pokedex;
