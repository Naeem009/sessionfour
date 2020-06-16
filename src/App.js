import React, { useState } from 'react';
import './App.css';
import {Message} from './message.js';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  let name = 'Naeem Shahzad'
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Have a good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message name={'Naeem Shahzad'}  counter={count}/>
      
      <button onClick={() => setCount(count+1)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;


