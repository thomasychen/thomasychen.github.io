import './App.css';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Experiences from './components/pages/Experiences/Experiences';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects/Projects';
import Navbar from './components/inc/Navbar';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={About} />
      <Route path= "/experiences" component = {Experiences} />
      <Route path= "/contactme" component = { Contact } />
      <Route path= "/projects" component = {Projects} />
      </Switch>
  </Router>
  );
}

export default App;
