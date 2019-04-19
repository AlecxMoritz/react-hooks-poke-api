import React, { useState } from 'react';
import { Button } from 'reactstrap'
const btnStyles = {
    display : 'block',
    margin: 'auto'
}

const Sprite = (props) => {
    const [toggle, setToggle] = useState('default');

    const toggleSprite = () => {
        if(toggle === 'default') {
            setToggle('shiny')
        } else {
            setToggle('default')
        }
    }


    const sprite =() => {
        if(toggle === 'default') {
            return (
                <img src={ props.defaultSprite } alt='sprite' />
            )
        } else {
            return (
                <img src={ props.shinySprite } alt='sprite' />
            )
        }
    }

    const text = () => {
        if(toggle === 'default') {
            return 'Shiny'
        } else {
            return 'Default'
        }
    }

    return (
        <React.Fragment>
            { sprite() }
            <Button style={btnStyles} onClick={ toggleSprite }>{ text() }</Button>
        </React.Fragment>
    )

}

export default Sprite;