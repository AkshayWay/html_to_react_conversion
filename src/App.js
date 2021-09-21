import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link,
  hashHistory,
} from "react-router-dom";
import Home from "./components/home";
import Shop from "./components/shop";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={Home}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
    </Router>
  );
}

export default App;
