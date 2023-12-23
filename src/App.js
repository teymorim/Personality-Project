import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'
import Services from './Pages/Services/Services'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element= {<Home />}/>
          <Route path="/about"  element= {<About />} />
          <Route path="/contact"  element= {<Contact />} />
          <Route path="/portfolio"  element= {<Portfolio />} />
          <Route path="/resume"  element= {<Resume />} />
          <Route path="/services"  element= {<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
