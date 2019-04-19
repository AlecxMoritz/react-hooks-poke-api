import React from 'react'
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const Types = (props) => {
    const types = props.types.map(type => {
        return <ListGroupItem key={ type.type.name }>{ type.type.name }</ListGroupItem>
    })
    
    return (
        <React.Fragment>
            <h6>Type :</h6>
            <ListGroup>
                { types }
            </ListGroup>

        </React.Fragment>
    )
}

export default Types;