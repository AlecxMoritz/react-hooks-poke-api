import React from 'react'

const Types = (props) => {
    const types = props.types.map(type => {
        return <li key={ type.type.name }>{ type.type.name }</li>
    })
    
    return (
        <ul>
            { types }
        </ul>
    )
}

export default Types;