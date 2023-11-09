import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [count,setCount] = useState(0);
  // //let count = 0;

  // const increment = () =>{
  //   //count +=1;
  //   setCount(count+1);
  // }
  // const decrement = () =>{
  //  // count -=1;  
  //  setCount(count-1);
  // }
  return (
    <div className='according'>
    <h1>React Bostrap Tutorial</h1>
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>
    // <>
    // <span className='title'>
    //   My Counter
    // </span>
    // <p className='subtitle'>The Count is {count}</p>
    // <button onClick={decrement} className='button'>-</button>
    // <button onClick={increment} className='button'>+</button>
    // </>
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