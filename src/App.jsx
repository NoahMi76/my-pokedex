import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetails';
import PokemonList from './components/PokemonList';
import Error404 from './components/Error404';
import { ChakraProvider} from "@chakra-ui/react";
import theme from './components/theme';


const App = () => {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonList/>} />
        <Route path="/pokemon/:id" element={<PokemonDetail/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter >
    </ChakraProvider>
  );
};

export default App;







