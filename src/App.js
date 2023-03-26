import logo from './logo.svg'; 
import './App.css';
import Header from './Components/Header'
import Hero from './Components/hero'
import About from './Components/About'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Service from './Components/Service'
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Hero></Hero>
        <main id="main">
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Service></Service>
        <Contact></Contact>
        </main>
      </header>
    </div>
  );
}

export default App;
