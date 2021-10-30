import Home from "./pages/Home";
import "./App.css";
import Todos from "./pages/todos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
