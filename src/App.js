import logo from './logo.svg';
import './App.css';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src="/homepage.jpg" alt="Car"/>
      </header>
      <Footer />
    </div>
  );
}

export default App;
