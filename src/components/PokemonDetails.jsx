import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Image, Badge, Text, Stack, VStack, Heading, Button, CircularProgress, Center } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
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

  const handleAddToPokedex = () => {
    const pokedex = localStorage.getItem("pokedex");
    const updatedPokedex = pokedex ? JSON.parse(pokedex) : [];
    localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
    alert("Le Pokémon a été ajouté au Pokédex !");
  };

  if (isLoading) {
    return (
      <Center h="100vh">
        <CircularProgress isIndeterminate color="teal.300" />
      </Center>
    );
  }

  if (!pokemon) {
    return (
      <Center h="100vh">
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
        <Heading as="h2" size="lg" mb={4} textAlign="center" color="red.500">
          Erreur dans l'API
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Nous rencontrons actuellement un problème pour récupérer les données du Pokémon. Veuillez réessayer plus tard.
        </Text>
      </Box>
    </Center>
    );
  }

  const heightInMeters = pokemon.height / 10;
  const weightInKilograms = pokemon.weight / 10;

  return (
    <Center>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={4}
      >
        <Stack direction="row" alignItems="center" mb={4}>
          <Button
            size="xs"
            as={Link}
            to="/"
            leftIcon={<ChevronLeftIcon />}
            colorScheme="primary"
            variant="outline"
          >
            Retour
          </Button>
          <Heading as="h2" size="lg" flexGrow={1} pl={20}>
            {pokemon?.name}
          </Heading>
        </Stack>
        <Image
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
          objectFit="contain"
          borderRadius="lg"

          mb={4}
          h={300}
          w={500}
        />
        <VStack spacing={2} alignItems="start">
          <Text>
          <Text fontWeight="bold"> Height: </Text>{heightInMeters} m
          </Text>
          <Text>
          <Text fontWeight="bold"> Weight: </Text> {weightInKilograms} kg
          </Text>
          <Text>
          <Text fontWeight="bold"> Base Experience: </Text>{pokemon?.base_experience}
          </Text>
          <Text>
          <Text fontWeight="bold"> Abilities: </Text>{" "}
            {pokemon?.abilities?.map((ability) => ability.ability.name).join(", ")}
          </Text>
          <Text>
          <Text fontWeight="bold"> Types: </Text>{" "}
            {pokemon?.types?.map((type) => (
              <Badge
                key={type.type.name}
                colorScheme="primary"
                variant="outline"
                mr={2}
              >
                {type.type.name}
              </Badge>
            ))}
          </Text>
          <Text mt={4} fontWeight="bold">
            Stats:
          </Text>
          {pokemon?.stats.map((stat) => (
            <Box key={stat.stat.name}>
              <Text>
                {stat.stat.name} {stat.base_stat}
              </Text>
            </Box>
          ))}
        </VStack>
        <Button mt={4}  colorScheme="primary" size="lg" isFullWidth onClick={handleAddToPokedex}>
          Ajouter au Pokédex
        </Button>
      </Box>
    </Center>
  );
};

export default PokemonDetails;

