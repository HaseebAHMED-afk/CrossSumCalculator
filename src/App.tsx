import { TextField , Button } from '@material-ui/core';
import './App.css';
import { useState } from 'react';

function App() {

  let [inputNumber , setInputNumber] = useState<String>('')
  let [finalResult , setFinalResult] = useState<Number>(0)

  const handleSubmit = async () =>{
    let result : number ;
    let sum = inputNumber
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);

    result = sum.toString().split('').map(Number).reduce(function (a, b) {
      return a + b;
  }, 0)
      
    setFinalResult(result)
    

  }

  return (
    <div className="App">
      <h1 className='main-header' >Cross Sum Calculator</h1>
      <div className='input-field' >
      <TextField variant='filled' color='secondary' label='Enter a number' type='number' value={inputNumber} onChange={(e)=> setInputNumber(e.target.value) } />
      <Button variant='contained' color='secondary' onClick={handleSubmit} >Submit</Button>
      </div>
      <div className='answer-card' >
        <div style={{margin:'auto'}} >
        <h1>Answer</h1>
        <h2>{finalResult}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
