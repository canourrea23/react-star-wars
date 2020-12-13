import React from 'react';
import { Link } from 'react-router-dom'

function StarShipResult(props) {
    console.log(props);
    const ship=props.location.state
    return (
        <div>
            <h4>Name: {ship.name}</h4>
            <p>Model: {ship.model }</p>a
            <Link to='/'>Return</Link>
        </div>
    )
}
export default StarShipResult;