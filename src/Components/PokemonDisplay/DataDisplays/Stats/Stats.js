import React from 'react';
import {
    Container,
    Col,
    Row,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const Stats = (props) => {
    const eggGroups = props.species.egg_groups.map(group => {
        let name = group.name;
        return <ListGroupItem key={name} >{ name[0].toUpperCase() + name.slice(1) }</ListGroupItem>
    })

    return (
        <Container>
            <hr />
            <Row>
                <Col xs="4">
                    <p>Base Happiness : { props.species.base_happiness }</p>
                    <p>Capture Rate : { props.species.capture_rate }</p>
                </Col>
                <Col xs="4">
                    <p>Habit : { props.species.habitat.name[0].toUpperCase() + props.species.habitat.name.slice(1) }</p>
                </Col>
                <Col xs="4">
                    <h6>Egg Groups</h6>
                    <ListGroup>
                        { eggGroups }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Stats;