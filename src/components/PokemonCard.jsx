import React from "react";
import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${index}`);
  };
  return (
    <Card maxW="sm" onClick={handleCardClick} cursor="pointer" boxShadow="md" rounded="md" ml={20} bgImage={`url(https://www.pokebip.com/membres/galeries/1217/1217241528089622100.jpg)`} Size="cover" >
      <CardBody>
        <Heading size="md" textAlign="center">{`${index}. ${pokemon.name}`}</Heading>
      </CardBody>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt={pokemon.name}
        borderRadius="md"
        maxH="200"
        mb="60"
              />
      
    </Card>
  );
};

export default PokemonCard;



