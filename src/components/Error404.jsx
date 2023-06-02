import React from "react";
import { Link } from "react-router-dom";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const Error404 = () => {
  return (
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        borderRadius="md"
        bg="red.500"
        color="white"
        fontWeight="bold"
        fontSize="xl"
        p={8}
      >
        <AlertIcon boxSize={8} />
        <AlertTitle mt={4} mb={2}>
          ERROR 404
        </AlertTitle>
        <AlertDescription>Page Introuvable 
          <br/>
        <Link to="/">Retour à l'accueil</Link></AlertDescription>
      </Alert>
  );
};

export default Error404;

