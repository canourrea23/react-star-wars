import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarShipResult from './StarShipResult';

function StarShips(props) {
  const [starship, setStarShip] = useState([]);
  const getStarShip= () => {
    // We will call the API using axios
    let url ='https://swapi.dev/api/starships/';
    axios.get(url)
    .then(res => {
      console.log(res)
      // Set sum state
      setStarShip(res.data.results)
    })
    .catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    getStarShip()
  },[])

  return (
    <div>
      <ul>
        {starship.map(starship =>
        <li>
        <Link     
            to={{
            pathname: '/starship',
            state: starship,
            }}
            key={starship.name}>
            {starship.name}        
        </Link></li>)}
      </ul>
    </div>
  // )
  )
}
export default StarShips;