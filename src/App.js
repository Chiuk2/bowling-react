import './App.css';
import { useState, useEffect, useRef } from 'react';
import CalculateScores from './Components/CalculateScores';
import ScrollToTop from './Components/ScrollToTop';
import logo from './Resources/retro_bowling_3.png';

function App() {
  const [input, setInput] = useState("");
  const [scores, setScores] = useState([]);
  const scoreEndRef = useRef(null)

  const addScore = () => {
    setScores([...scores, {inputString: input}]);
  }

  const scrollToBottom = () => {
    scoreEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [scores]);


  return (
    <div className="App">
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <div className="title">Bowling Game Score Problem</div>
        <div className="inputContainer">
          <label htmlFor="stringInput">INPUT STRING</label>
          <input type="text" placeholder="Enter Here..." id="stringInput" onChange={(e) =>
          {
            setInput(e.target.value);
          }}/>
          <button onClick={addScore}>Submit</button>
        </div>                     
      </div>      
      {scores.map((element, key) =>{
        return <CalculateScores input={element.inputString} />
      })}
      <div ref={scoreEndRef} />
      <ScrollToTop />
    </div>

  );
}

export default App;
