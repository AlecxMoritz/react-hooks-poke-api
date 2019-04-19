import React, { useState, useEffect } from 'react';
import PokeSearch from './PokeSearch/PokeSearch';
import PokemonDisplay from './PokemonDisplay/PokemonDisplay';
import SiteNav from './UI/SiteNav'
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import About from './Pages/About/About';

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;

const Main = () => {
    const [token, setToken] = useState('test');

    const logout = () => {
        setToken('');
    }

    return (
        <Container fluid={true}>
            <Router>
                <SiteNav token={ token } logout={logout} />
                <Switch>
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/search" exact component={Search} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </Router>
        </Container>
    )
}

export default Main;