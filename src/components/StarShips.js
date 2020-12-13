import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

import StarShipResult from './StarShipResult';
function StarShips(props) {
  // TODO: Verify zip is actually a zip
  const [num, setNum] = useState('');
  const [starship, setStarShip] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // We will call the API using axios
    let url =`https://swapi.dev/api/starships/${num}`;
    axios.get(url)
    .then(result => {
      // Set sum state
      setStarShip(result.data)
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
   
        props.starships.map(starship =>
        <Link
            to={{
            pathname: '/starship',
            state: starship,
            }}
            key={starship.name}>
            {{starship.name}}
        </Link>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Find the Star Ship</h1>
    //     {starship ? <StarShipResult StarShip={starship}/> : null}
    //     <label htmlFor='num'>Space craft: </label>
    //     <input type="text" name="num" id="num" onChange={e => setNum(e.target.value)}/>
    //     <input type="submit" value="Find SpaceShips"/>
    //   </form>
    // </div>
  //)
    )
  )
}
export default StarShips;