import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let count = 0;
  return (
    <>
    <span className='title'>
      My Counter
    </span>
    <p className='subtitle'>The Count is {count}</p>
    <button className='button'>-</button>
    <button className='button'>+</button>
    </>
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route path="/About" element={<About />} />
    //       <Route path="/Contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
