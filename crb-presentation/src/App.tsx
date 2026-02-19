import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Realizations from './pages/Realizations';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realizations />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
