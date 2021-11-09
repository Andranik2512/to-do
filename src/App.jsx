import Home from "./pages/Home";
import Todos from "./pages/todos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import {Button, } from '@mui/material'

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li>
              <Button 
              variant="contained">
                <Link className='under' to="/">Home </Link>
              </Button>
              
            </li>
          </ul>
        </nav>
      <Switch>
      <Route exact path="/" component={Home}/>        
        <Route exact path="/todos">
        <Todos />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
