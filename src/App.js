import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Project /> 
       <Skills /> 
       {/* <Contact /> */}

    </div>
  );
}

export default App;
