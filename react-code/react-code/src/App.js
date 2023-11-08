import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count,setCount] = useState(0);
  //let count = 0;

  const increment = () =>{
    //count +=1;
    setCount(count+1);
  }
  const decrement = () =>{
   // count -=1;  
   setCount(count-1);
  }
  return (
    <>
    <span className='title'>
      My Counter
    </span>
    <p className='subtitle'>The Count is {count}</p>
    <button onClick={decrement} className='button'>-</button>
    <button onClick={increment} className='button'>+</button>
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
