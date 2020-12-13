import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import StarShips from './components/StarShips';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Route path='/starship' render={({location}) => 
          <StarShips location={location}/>
          }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
