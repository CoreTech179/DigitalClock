import './App.css';
import React, {useState} from 'react';

function App() {

  let time = new Date().toLocaleTimeString();
  
  const [currentTime, setCurrentTime] = useState(time);
  
  const updateTime = ()=>{
    
    time = new Date().toLocaleTimeString();

    setCurrentTime(time);
  }

  setInterval(updateTime,1000);
  
  return (
    <>
      <div className="container">
        <h3>{currentTime}</h3>
      </div>
    </>
  );
}

export default App;
