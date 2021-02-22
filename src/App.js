import './App.css';
import Header from './components/Header/Header';
import FormularioContato from './components/FormularioContato/FormularioContato'
import Footer from './components/Footer/Footer';
import imagemcontato from './Imagens/imgcontato.jpg'

function App() {
  return (
    <div className="container">
        <Header></Header>
        <FormularioContato></FormularioContato>
        <div className="imgContato">
          <img src={imagemcontato} width="400px" height="300px"></img> 
        </div>

        <Footer></Footer>
    </div>
  );
}

export default App;
