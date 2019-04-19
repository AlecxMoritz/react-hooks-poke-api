import React, { useState, useEffect } from 'react'
import HeldItem from './HeldItem/HeldItem';
import {
    ListGroup,
} from 'reactstrap';
const HeldItems = (props) => {
    const show = () => {
        if(props.items.length > 0 ) {
            return <h4>Held Items</h4>
        }
    }
    const items = props.items.map(item => {
        return <HeldItem key={item.item.name} item={item} />;
    })
    
    return (
        <ListGroup>
            { show() }
            { items }
        </ListGroup>
    )
}

export default HeldItems;