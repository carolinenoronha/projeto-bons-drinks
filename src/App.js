
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import BuscarDrinks from './components/API/BuscaDrinks';
import AboutUs from './components/AboutUs/AboutUs';
import Equipe from './components/Equipe/Equipe';
import Contact from './components/ContactForms/ContactForms'


function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>

          <Route path="/" exact>
            <Home className="content"/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/about">
            <AboutUs/>
          </Route>

          <Route path="/team">
            <Equipe/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
