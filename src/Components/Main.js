import React, { useState, useEffect } from 'react';
import PokeSearch from './PokeSearch/PokeSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';

const Main = () => {
    const [pokemon, setPokemon] = useState('');
    const [species, setSpecies] = useState('');

    const setSearchPokemon = (searchedPokemon) => {
        setPokemon(searchedPokemon);
        console.log(pokemon);
    }

    const setSearchSpecies =  async (searchedSpecies) => {
        setSpecies(searchedSpecies);
        console.log(species);
    }

    const showPokemon = () => {
        if(pokemon !== '' && species !== '') {
            return <PokemonDisplay pokemon={pokemon} species={ species } />
        }
    }

    return (
        <React.Fragment>
            <PokeSearch setSearchPokemon={ setSearchPokemon } setSearchSpecies= { setSearchSpecies } />
            { showPokemon() }
        </React.Fragment>
    )
}

export default Main;