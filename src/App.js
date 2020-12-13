import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import StarShipResult from './components/StarShipResult';
import StarShips from './components/StarShips';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <header className="App-header">
      <p>Star Wars Ships</p>
    </header>
    <Switch>
       <Route exact path='/starship' render={({location}) => 
          <StarShipResult location={location}/>
          }/>
        <Route exact path='/' render={({location}) => 
          <StarShips location={location}/>
          }/></Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
