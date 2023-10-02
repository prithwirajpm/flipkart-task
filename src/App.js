
import Row from './Component/Row';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home />
        <Row />
        <Footer />
    </div>
  );
}

export default App;
