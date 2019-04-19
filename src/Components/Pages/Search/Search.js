import React, { useState } from 'react';
import PokeSearch from '../../PokeSearch/PokeSearch';
import PokemonDisplay from '../../PokemonDisplay/PokemonDisplay';
import {
    Container
} from 'reactstrap';

const Search = () => {
    const [pokemon, setPokemon] = useState('');
    const [species, setSpecies] = useState('');
    const [token, setToken] = useState('test');

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
            return <PokemonDisplay pokemon={ pokemon } species={ species } />
        }
    }
    return (
        <Container>
            <PokeSearch setSearchPokemon={ setSearchPokemon } setSearchSpecies= { setSearchSpecies } />
            { showPokemon() }
        </Container>
    )
}

export default Search;