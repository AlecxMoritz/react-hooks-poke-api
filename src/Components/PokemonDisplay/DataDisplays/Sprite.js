import React, { useState } from 'react';

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
                <img src={ props.defaultSprite }/>
            )
        } else {
            return (
                <img src={ props.shinySprite } />
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
            <button style={btnStyles} onClick={ toggleSprite }>{ text() }</button>
        </React.Fragment>
    )

}

export default Sprite;