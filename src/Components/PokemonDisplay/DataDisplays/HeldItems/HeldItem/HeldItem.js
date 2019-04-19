import React, { useState, useEffect } from 'react'
import {
    ListGroupItem,
    Container,
    Row,
    Col
} from 'reactstrap';

const HeldItem = (props) => {
    const [searchItem, setSearchItem] = useState(undefined);

    useEffect(() => {
        fetch(`http://pokeapi.co/api/v2/item/${props.item.item.name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSearchItem(data);
            })
            .catch(err => console.log(err));
    }, [props.item])
   
    const nameFormat = (name) => {
        let words = name.split('-');
        words = words.map(word => {
            return word[0].toUpperCase() + word.slice(1);;
        })

        return words.join(' ');
    }

    if(searchItem !== undefined) {
        let item = searchItem
        return (
            <ListGroupItem>
                <Container>
                    <Row>
                        <Col xs="2">
                            <img src={ item.sprites.default } />
                        </Col>
                        <Col xs="10">
                            <p>{ nameFormat(item.name) }</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>{ item.flavor_text_entries.filter(entry => entry.language.name === 'en')[0].text }</p>
                    </Row>
                    <hr />
                    <Row>
                        <p>Effect : { item.effect_entries[0].effect }</p>
                    </Row>
                </Container>
            </ListGroupItem>
        )
    } else {
        return null
    }
}

export default HeldItem;