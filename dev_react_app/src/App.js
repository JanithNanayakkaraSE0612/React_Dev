// import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';

import { myData } from './Data/MyData';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div>Janith Induwara Nanayakakra
      <h1>Janith</h1>
    </div>
    <p>I'm Janith Nanayakakra Senior Software Engineer</p>
    {/* <Main  name="Navindu" city="Galle" position="Web-developer">
      <p>Software Developer</p>
      <p>
        I'm Children
      </p>
    </Main>
    <Main name="kavindu" city="Tangalla" position="app-developer"/>
    <Main name="Gayani" city= "Elpitiya" position="UI / UX Developer"/> */
    myData.map(({name,city,position,id})=>{
      // assign key value
      return <Main key={id} name={name} city={city} position={position}/>
    })
    }
    </>
  );
}

export default App;
