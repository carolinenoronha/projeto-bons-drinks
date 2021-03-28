
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Api from '../src/components/API/BuscaDrinks'

function App() {
  return (
    <div className="container">
        <Router>
        <Header></Header>
      {/*   <Home></Home> */}
        <Api></Api>
        <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
