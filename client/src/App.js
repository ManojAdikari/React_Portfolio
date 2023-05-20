//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Nav />
      <Routes >
        <Route path='/' exact Component={Home} />
        <Route path='/contact' exact Component={Contact} />
        <Route path='/portfolio' exact Component={Portfolio} />
        <Route path='/resume' exact Component={Resume} />
      </Routes >
      <Footer />

    </Router>

  );
}

export default App;


