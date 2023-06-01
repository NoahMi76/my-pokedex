import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetails';
import PokemonList from './components/PokemonList';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonList/>} />
        <Route path="/pokemon/:id" element={<PokemonDetail/>} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;








