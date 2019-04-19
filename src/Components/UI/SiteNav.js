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
import { Link } from 'react-router-dom';

const SiteNav = (props) => {
    const links = props.token !== '' ? (
        <React.Fragment>
            <NavItem>
                <NavLink>
                    <Link to="/pokemon" className="nav-link">
                        My Pokemon
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/account" className="nav-link">
                        Account
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={ props.logout }>
                    <Link className="nav-link">
                        Log Out
                    </Link>
                </NavLink>
            </NavItem>
            <NavLink>
                <Link to="/search" className="nav-link">
                    Search
                </Link>
            </NavLink>
        </React.Fragment>
    ) : (
        <React.Fragment>
        <NavItem>
            <NavLink>
                <Link to="/search" className="nav-link">
                    Search
                </Link>
            </NavLink>
        </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/auth" className="nav-link">
                        Log In
                    </Link>
                </NavLink>
            </NavItem>
            
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">PokéHelper</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    { links }
                    <NavItem>
                        <NavLink>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}

export default SiteNav;