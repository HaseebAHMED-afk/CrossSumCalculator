import { TextField , Button } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='main-header' >Cross Sum Calculator</h1>
      <div className='input-field' >
      <TextField variant='filled' color='secondary' label='Enter a number' />
      <Button variant='contained' color='secondary' >Submit</Button>
      </div>
      <div className='answer-card' >
        <div style={{margin:'auto'}} >
        <h1>Answer</h1>
        <h2>0</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
