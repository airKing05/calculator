import { useEffect, useRef, useState } from 'react';
import './App.css';

// const btn = [
//   ["C", '&#37;', "&#8653;", "&#247;"],
//   [7, 8, 9, "&#215;"],
//   [4, 5, 6, "&#8722;"],
//   ["&#803;", 0, "&#61;"]
// ]
const btn = [
  ["C", '%', "<=", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "="]
]


function App() {
  const [calculated, setCalculated] = useState('');
  const [calculation, setCalculation] = useState('');
  const inputRef = useRef('');

  //useEffect(() => inputRef.current.focus());

  function clickHandler(e) {
    
    setCalculation(calculation + e.target.name)
  }

  function reset() {
    setCalculation("")
    setCalculated("")
    //console.log("reset")
  }

  function back() {
    let slicedCalculation = calculation.slice(0, calculation.length - 1);
    setCalculation(slicedCalculation);
  }

  function enter() {
    console.log("enter")
    let result = eval(calculation);
    setCalculation(result);
    setCalculated(result)
  }

  console.log(calculation)

  return (
    <div className='full-screen'>
      <div className='full-screen__screen'>
        <div className='full-screen__screen-calculationState screen__placement'>
          <input type="text" ref={inputRef} value={calculation} />
        </div>
        <div className='full-screen__screen-calculatedState screen__placement'> <span>{calculated}</span></div>
      </div>
      <div className='full-screen__button-box'>
        {
          btn.flat().map((btn, index) => {
            return <div
              key={index}
              className={`btn ${btn === "=" ? 'equal-btn' : btn === "<=" ? 'cross-btn' : ""}`}
            >
              <button
                className='btn-text'
                style={{ background: `${btn === "=" ? ' rgb(81, 190, 81)' : btn === "<=" ? 'rgb(225, 95, 95)' : '#fff'}` }}
                name={`${btn === "X" ? '*' : btn}`}
                onClick={btn === "=" ? enter : btn === "<=" ? back : btn === "C" ? reset : clickHandler}
              >{btn}</button>
            </div>
          })
        }
      </div>
    </div>


  );
}

export default App;
