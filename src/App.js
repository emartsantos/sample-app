
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import HeroElements from './component/HeroElements/Index';
import Section from './component/Section'

function App() {
  return (
    <Router>
      <Navbar/>
      <HeroElements/>
      <Section/>
    </Router>
  );
}

export default App;
