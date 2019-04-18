import React, { useState, useEffect } from 'react';

const PokeSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const search = () => {
        const APIURL = `http://pokeapi.co/api/v2/pokemon/${searchTerm}`;

        fetch(APIURL)
            .then(res => res.json())
            .then(data => {
                props.setSearchPokemon(data);
                searchSpecies();
            })
            .catch(err => console.log(err));
    }

    const searchSpecies = () => {
        const APIURL = `http://pokeapi.co/api/v2/pokemon-species/${searchTerm}`;

        fetch(APIURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                props.setSearchSpecies(data);
            })
            .catch(err => console.log(err));
            // * flavortext[71]

    }

    return (
        <React.Fragment>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={search}>Search</button>
        </React.Fragment>
    )
}

export default PokeSearch;