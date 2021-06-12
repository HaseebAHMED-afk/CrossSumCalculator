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
    </div>
  );
}

export default App;
