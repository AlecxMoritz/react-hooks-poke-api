import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import Sprite from './DataDisplays/Sprite';
import Genera from './DataDisplays/Genera';
import Name from './DataDisplays/Name';
import FlavorText from './DataDisplays/FlavorText';
import Types from './DataDisplays/Types';
import HeldItems from './DataDisplays/HeldItems/HeldItems';
import Stats from './DataDisplays/Stats/Stats';

const btnStyles = {
    marginTop : '2em'
}
const PokemonDisplay = (props) => {
    const [showMore, setShowMore] = useState(false);

    const toggle = () => {
        console.log('oggling')
        if(showMore == false) {
            setShowMore(true);
        } else {
            setShowMore(false);
        };
    };

    const showMoreDisplay = showMore ? (
        <Row>
            <Stats pokemon={ props.pokemon } species={ props.species }/>
        </Row>
    ) : null

    const name = props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1);
    const flavorText = props.species.flavor_text_entries.filter(entry => entry.language.url == 'https://pokeapi.co/api/v2/language/9/')[0].flavor_text;
    const genera = props.species.genera.filter(entry => entry.language.name == 'en')[0].genus;

    return (
        <Container>

            <Row>
                <Col xs="2">
                    <Sprite defaultSprite={props.pokemon.sprites.front_default} shinySprite={props.pokemon.sprites.front_shiny}/>
                </Col>
                <Col xs="8">
                    <Name name={ name } />
                    <Genera genera={ genera }/>
                    <FlavorText flavorText={ flavorText } />
                </Col>
                <Col xs="2">
                    <Types types={ props.pokemon.types } />
                    <Button style={ btnStyles } onClick={ toggle }>Show More</Button>
                </Col>
            </Row>
            { showMoreDisplay }
            <hr />
            <Row>
                <Col xs="4">
                    <HeldItems items={props.pokemon.held_items } />
                </Col>
                <Col xs="8">
                    <h4>Moves</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default PokemonDisplay;