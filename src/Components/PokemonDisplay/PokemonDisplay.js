import React, { useState, useEffect } from 'react';
import Sprite from './DataDisplays/Sprite';
import Genera from './DataDisplays/Genera';
import Name from './DataDisplays/Name';
import FlavorText from './DataDisplays/FlavorText';
import Types from './DataDisplays/Types';

const PokemonDisplay = (props) => {
    const name = props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1);
    const flavorText = props.species.flavor_text_entries.filter(entry => entry.language.url == 'https://pokeapi.co/api/v2/language/9/')[0].flavor_text;
    const genera = props.species.genera.filter(entry => entry.language.name == 'en')[0].genus;

    const types = props.pokemon.types.map(type => {
        return <li key={ type.type.name }>{ type.type.name }</li>
    });

    return (
        <div>
            <Sprite defaultSprite={props.pokemon.sprites.front_default} shinySprite={props.pokemon.sprites.front_shiny}/>
            <Name name={ name } />
            <Genera genera={ genera }/>
            <FlavorText flavorText={ flavorText } />
            <Types types={ props.pokemon.types } />
        </div>
    )
}

export default PokemonDisplay;