import React, { useState, useEffect } from 'react';
import {
    Input,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

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
            <Navbar color="light" light expand="md">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                    </NavItem>
                    <NavItem>
                        <Button onClick={search}>Search</Button>
                    </NavItem>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}

export default PokeSearch;