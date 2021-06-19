import './App.css';
import Navbar from "./Components/Navbar/index";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/about";
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
