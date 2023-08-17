import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import { Analytics } from "@vercel/analytics/react";
import Projects from './pages/Projects/Projects';
import Project from './pages/Project/Project';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
